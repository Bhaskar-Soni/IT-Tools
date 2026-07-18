import * as forge from 'node-forge';
import jks from 'jks-js';

import { translate as t } from '@/plugins/i18n.plugin';

function convertPKCS12ToPem(p12base64: forge.Bytes | forge.util.ByteBuffer, password: string) {
  const p12Asn1 = forge.asn1.fromDer(p12base64, false);
  const p12 = forge.pkcs12.pkcs12FromAsn1(p12Asn1, false, password);

  const pemKey = getKeyFromP12(p12);
  const { pemCertificate, commonName } = getCertificateFromP12(p12);

  return { pemKey, pemCertificate, commonName };
}

function getKeyFromP12(p12: forge.pkcs12.Pkcs12Pfx) {
  const keyData = p12.getBags({ bagType: forge.pki.oids.pkcs8ShroudedKeyBag });
  let pkcs8Key = keyData[forge.pki.oids.pkcs8ShroudedKeyBag]![0];

  if (!pkcs8Key) {
    pkcs8Key = keyData[forge.pki.oids.keyBag]![0];
  }

  if (!pkcs8Key?.key) {
    throw new TypeError('Unable to get private key.');
  }

  return forge.pki.privateKeyToPem(pkcs8Key.key);
}

function getCertificateFromP12(p12: any) {
  const certData = p12.getBags({ bagType: forge.pki.oids.certBag });
  const certificate = certData[forge.pki.oids.certBag][0];

  const pemCertificate = forge.pki.certificateToPem(certificate.cert);
  const commonName = certificate.cert.subject.attributes[0].value;
  return { pemCertificate, commonName };
}

async function tryParseWithSshpk(value: any, format?: string) {
  // Don't attempt to import `sshpk` in browser — Vite externalizes Node built-ins used by it.
  const runningInBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
  if (runningInBrowser) return null;
  try {
    const mod = await import('sshpk');
    const parseCertificate = (mod as any).parseCertificate as any;
    if (format) return parseCertificate(value, format);
    return parseCertificate(value);
  } catch (e) {
    return null;
  }
}

export async function convertCertificates(
  inputKeyOrCertificateValue: string | Buffer,
  password: string) {
  if (typeof inputKeyOrCertificateValue !== 'string') {
    return await convertCertificate(inputKeyOrCertificateValue, password);
  }
  const parts = inputKeyOrCertificateValue.toString().trim().split(/(-----BEGIN [^-]+-----\n)/).filter(s => s !== '');
  if (!parts.length) {
    return await convertCertificate(inputKeyOrCertificateValue, password);
  }
  let parsedPEMs: Array<any> = [];
  for (let i = 0; i < parts.length; i += 2) {
    const pemPart = parts[i] + parts[i + 1];
    const converted = await convertCertificate(pemPart, password);
    if (converted && Array.isArray(converted)) parsedPEMs = [...parsedPEMs, ...converted];
  }
  return parsedPEMs;
}

export async function convertCertificate(
  inputKeyOrCertificateValue: string | Buffer,
  password: string) {
  const canParse = async (value: any, parseFunction: (value: any) => any) => {
    try {
      const res = await parseFunction(value);
      return res;
    }
    catch (e: any) {
      return null;
    }
  };

  // Try parsing with forge (PEM/x509)
  const forgeParse = (value: any) => {
    try {
      const str = typeof value === 'string' ? value : new TextDecoder().decode(value as any);
      if (/-----BEGIN [^-]+-----/.test(str)) {
        const cert = forge.pki.certificateFromPem(str);
        return cert;
      }
      return null;
    } catch {
      return null;
    }
  };

  const cert = await canParse(inputKeyOrCertificateValue, async v => {
    const c = forgeParse(v);
    if (c) return c;
    const s = await tryParseWithSshpk(v, 'pem') || await tryParseWithSshpk(v, 'x509') || await tryParseWithSshpk(v, 'openssh');
    return s;
  });

  if (cert) {
    try {
      const pem = typeof cert === 'string' ? cert : forge.pki.certificateToPem(cert as any);
      let der: any = null;
      try {
        der = typeof cert?.toBuffer === 'function' ? cert.toBuffer('x509') : null;
      } catch {}
      return [{
        alias: '#default',
        key: null,
        der,
        pem,
      }];
    } catch {
      // fallthrough
    }
  }

  // Try PKCS12
  const pkcs12 = await canParse(inputKeyOrCertificateValue, async (value) => {
    try {
      const raw = typeof value === 'string' ? value : new TextDecoder().decode(value as any);
      const buf = forge.util.createBuffer(raw, 'raw');
      return convertPKCS12ToPem(buf, password);
    } catch {
      return null;
    }
  });
  if (pkcs12) {
    return [{
      alias: pkcs12.commonName,
      key: pkcs12.pemKey,
      der: await (async () => {
        try {
          const pemCert = pkcs12.pemCertificate;
          const parsed = await tryParseWithSshpk(pemCert, 'pem');
          return parsed ? parsed.toBuffer('x509') : null;
        } catch {
          return null;
        }
      })(),
      pem: pkcs12.pemCertificate,
    }];
  }

  // Try JKS
  const parsedJKS = await canParse(inputKeyOrCertificateValue, async (value) => {
    try {
      const raw = typeof value === 'string' ? value : new TextDecoder().decode(value as any);
      return jks.toPem(raw, password);
    } catch {
      return null;
    }
  });
  if (parsedJKS) {
    return Object.entries(parsedJKS).map(([k, v]) => {
      if (typeof v === 'string') {
        const der = null;
        return {
          alias: k,
          key: null,
          der,
          pem: v,
        };
      }
      const obj = v as any;
      return {
        alias: k,
        key: obj.key,
        der: null,
        pem: obj.cert,
      };
    });
  }

  return null;
}
