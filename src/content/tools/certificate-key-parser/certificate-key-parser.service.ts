import type { Buffer } from 'buffer';
import { Base64 } from 'js-base64';
import * as openpgp from 'openpgp';
import * as forge from 'node-forge';

import {
  getCSRLabelValues,
  getCertificateLabelValues,
  getFingerprintLabelValues,
  getPGPPrivateKeyLabelValuesAsync,
  getPGPPublicKeyLabelValuesAsync,
  getPrivateKeyLabelValues,
  getPublicKeyLabelValues,
  getSignatureLabelValues,
  type LabelValue,
} from './certificate-key-parser.infos';

export async function getKeysOrCertificatesInfosAsync(
  input: string | Buffer,
  passphrase: string,
) {
  const parts = input
    .toString()
    .trim()
    .split(/(-----BEGIN [^-]+-----\n)/)
    .filter(Boolean);

  if (parts.length <= 1) {
    return [await getKeyOrCertificateInfosAsync(input, passphrase)];
  }

  const result = [];
  for (let i = 0; i < parts.length; i += 2) {
    result.push(await getKeyOrCertificateInfosAsync(parts[i] + parts[i + 1], passphrase));
  }
  return result;
}

export async function getKeyOrCertificateInfosAsync(
  input: string | Buffer,
  passphrase: string,
) {
  // Lazy-load sshpk only when needed to avoid bundling Node-only polyfills in client
  let sshpk: any | null = null;
  const getSshpk = async () => {
    if (sshpk) return sshpk;
    // Avoid importing Node-only `sshpk` in browser bundles (Vite externalizes `path`, etc.).
    // Only attempt to import when running in a Node environment.
    const runningInBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
    if (runningInBrowser) {
      sshpk = null;
      return null;
    }
    try {
      sshpk = await import('sshpk');
      return sshpk;
    } catch {
      sshpk = null;
      return null;
    }
  };
  const value = typeof input === 'string' ? input.trim() : input;

  try {
    // PRIVATE KEY
    for (const format of ['pem', 'openssh']) {
      try {
        const mod = await getSshpk();
        if (!mod) break;
        const key = (mod as any).parsePrivateKey(value, format as any, { passphrase });
        return { values: getPrivateKeyLabelValues(key) };
      } catch {}
    }

    // PUBLIC KEY
    try {
      const mod = await getSshpk();
      if (mod) {
        const key = (mod as any).parseKey(value);
        return { values: getPublicKeyLabelValues(key) };
      }
    } catch {}

    // PGP PRIVATE
    try {
      const k = await openpgp.readPrivateKey({ armoredKey: value.toString() });
      return { values: await getPGPPrivateKeyLabelValuesAsync(k) };
    } catch {}

    // PGP PUBLIC
    try {
      const k = await openpgp.readKey({ armoredKey: value.toString() });
      return { values: await getPGPPublicKeyLabelValuesAsync(k) };
    } catch {}

    // CSR (MUST be before cert)
    try {
      const csr = forge.pki.certificationRequestFromPem(value.toString());
      return { values: getCSRLabelValues(csr) };
    } catch {}

    // CERTIFICATE
    for (const format of ['pem', 'x509', 'openssh']) {
      try {
        const mod = await getSshpk();
        if (!mod) continue;
        const cert = (mod as any).parseCertificate(value, format as any);

        let der = '';
        try {
          der = Base64.fromUint8Array(cert.toBuffer('x509'));
        } catch {}

        let forgeCert: forge.pki.Certificate | null = null;
        try {
          forgeCert = forge.pki.certificateFromPem(value.toString());
        } catch {
          try {
            const asn1 = forge.asn1.fromDer(value.toString('binary'));
            forgeCert = forge.pki.certificateFromAsn1(asn1);
          } catch {}
        }

        return {
          values: getCertificateLabelValues(cert, forgeCert),
          certificateX509DER: der,
        };
      } catch {}
    }

    // FINGERPRINT
    try {
      const mod = await getSshpk();
      if (mod) {
        const fp = (mod as any).parseFingerprint(value.toString());
        return { values: getFingerprintLabelValues(fp) };
      }
    } catch {}

    // SIGNATURE
    for (const algo of ['rsa', 'dsa', 'ecdsa', 'ed25519']) {
      for (const fmt of ['asn1', 'ssh', 'raw']) {
        try {
          const mod = await getSshpk();
          if (!mod) continue;
          const sig = (mod as any).parseSignature(value, algo as any, fmt as any);
          return { values: getSignatureLabelValues(sig) };
        } catch {}
      }
    }

    return {
      values: [{ label: 'Type:', value: 'Unknown format or invalid passphrase' }],
    };
  } catch (e: any) {
    return {
      values: [{ label: 'Error:', value: e.toString() }] as LabelValue[],
    };
  }
}

