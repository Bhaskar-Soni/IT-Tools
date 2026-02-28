import { pki } from 'node-forge';
import workerScript from 'node-forge/dist/prime.worker.min?url';

export { generateKeyPair };

function generateRawPairs({ bits = 2048 }) {
  return new Promise<pki.rsa.KeyPair>((resolve, reject) =>
    pki.rsa.generateKeyPair({ bits, workerScript }, (err, keyPair) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(keyPair);
    }),
  );
}

async function generateKeyPair(config: {
  bits?: number
  password?: string
  format?: string
  comment?: string
} = {}) {
  const { privateKey, publicKey } = await generateRawPairs(config);

  const privateUnencryptedKeyPem = pki.privateKeyToPem(privateKey);

  if (config?.format === 'pem') {
    return {
      publicKey: pki.publicKeyToPem(publicKey),
      privateKey: config?.password
        ? pki.encryptRsaPrivateKey(privateKey, config?.password)
        : privateUnencryptedKeyPem,
    };
  }

  // sshpk relies on Node internals and is not browser-friendly. Provide a browser-friendly
  // fallback that at least returns the public key in OpenSSH `ssh-rsa` format while
  // keeping the private key as PEM.
  const runningInBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
  if (runningInBrowser && (config?.format === 'ssh' || config?.format === 'openssh' || config?.format === 'putty')) {
    // Build OpenSSH public key: "ssh-rsa <base64(blob)> [comment]"
    function hexToUint8Array(hex: string) {
      if (hex.length % 2) hex = '0' + hex;
      const out = new Uint8Array(hex.length / 2);
      for (let i = 0; i < out.length; i++) out[i] = parseInt(hex.substr(i * 2, 2), 16);
      return out;
    }

    function writeUint32BE(arr: number[], v: number) {
      arr.push((v >>> 24) & 0xff, (v >>> 16) & 0xff, (v >>> 8) & 0xff, v & 0xff);
    }

    function uint8ArrayToBase64(u8: Uint8Array) {
      let s = '';
      const chunk = 0x8000;
      for (let i = 0; i < u8.length; i += chunk) {
        s += String.fromCharCode.apply(null, Array.from(u8.subarray(i, i + chunk)));
      }
      return btoa(s);
    }

    const parts: number[] = [];
    const alg = 'ssh-rsa';
    // alg string
    const algBytes = new TextEncoder().encode(alg);
    writeUint32BE(parts, algBytes.length);
    parts.push(...Array.from(algBytes));

    // exponent (e) as mpint (stored as unsigned big-endian with length prefix)
    const eHex = publicKey.e.toString(16);
    let eBytes = hexToUint8Array(eHex);
    if (eBytes[0] & 0x80) {
      const tmp = new Uint8Array(eBytes.length + 1);
      tmp[0] = 0;
      tmp.set(eBytes, 1);
      eBytes = tmp;
    }
    writeUint32BE(parts, eBytes.length);
    parts.push(...Array.from(eBytes));

    // modulus (n) as mpint
    const nHex = publicKey.n.toString(16);
    let nBytes = hexToUint8Array(nHex);
    if (nBytes[0] & 0x80) {
      const tmp = new Uint8Array(nBytes.length + 1);
      tmp[0] = 0;
      tmp.set(nBytes, 1);
      nBytes = tmp;
    }
    writeUint32BE(parts, nBytes.length);
    parts.push(...Array.from(nBytes));

    const blob = new Uint8Array(parts);
    const b64 = uint8ArrayToBase64(blob);
    const comment = config?.comment ? ' ' + config?.comment : '';
    return {
      publicKey: `ssh-rsa ${b64}${comment}`,
      privateKey: config?.password
        ? pki.encryptRsaPrivateKey(privateKey, config?.password)
        : privateUnencryptedKeyPem,
    };
  }

  // If running in browser but not requesting SSH formatting, return PEMs.
  if (runningInBrowser) {
    return {
      publicKey: pki.publicKeyToPem(publicKey),
      privateKey: config?.password
        ? pki.encryptRsaPrivateKey(privateKey, config?.password)
        : privateUnencryptedKeyPem,
    };
  }

  const sshpkMod = await import('sshpk');
  const privKey = sshpkMod.parsePrivateKey(privateUnencryptedKeyPem);
  privKey.comment = config?.comment;
  const pubFormat = config.format ?? 'ssh';
  let privFormat = config.format ?? 'ssh';
  if (privFormat === 'ssh') {
    privFormat = 'ssh-private';
  }
  const pubKey = privKey.toPublic();
  return {
    publicKey: pubKey.toString(pubFormat),
    privateKey: config?.password
      ? privKey.toString(privFormat,
        { passphrase: config?.password, comment: config?.comment },
      )
      : privKey.toString(privFormat, { comment: config?.comment }),
  };
}
