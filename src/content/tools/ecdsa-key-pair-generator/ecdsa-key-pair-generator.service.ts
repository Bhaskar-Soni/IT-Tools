export { generateKeyPair };

async function generateKeyPair(config: {
  password?: string
  format?: string
  curve?: string
  comment?: string
} = {}) {
  const runningInBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
  // Browser fallback using WebCrypto for supported curves (e.g., nistp256 -> P-256)
  if (runningInBrowser) {
    const curve = (config?.curve || 'nistp256').toLowerCase();
    let namedCurve: string;
    if (curve === 'nistp256' || curve === 'p-256' || curve === 'p256') namedCurve = 'P-256';
    else if (curve === 'nistp384' || curve === 'p-384' || curve === 'p384') namedCurve = 'P-384';
    else if (curve === 'nistp521' || curve === 'p-521' || curve === 'p521') namedCurve = 'P-521';
    else throw new Error('Unsupported curve for browser fallback: ' + config?.curve);

    // Generate key pair
    // @ts-expect-error - subtle exists in browsers
    const keyPair = await crypto.subtle.generateKey(
      { name: 'ECDSA', namedCurve },
      true,
      ['sign', 'verify'],
    );

    const pubRaw = new Uint8Array(await crypto.subtle.exportKey('raw', keyPair.publicKey as CryptoKey));
    const privPkcs8 = new Uint8Array(await crypto.subtle.exportKey('pkcs8', keyPair.privateKey as CryptoKey));
    const pubSpki = new Uint8Array(await crypto.subtle.exportKey('spki', keyPair.publicKey as CryptoKey));

    const toBase64 = (buf: Uint8Array) => {
      let binary = '';
      const chunkSize = 0x8000;
      for (let i = 0; i < buf.length; i += chunkSize) {
        binary += String.fromCharCode.apply(null, Array.from(buf.subarray(i, i + chunkSize)) as any);
      }
      return btoa(binary);
    };

    const toPem = (base64: string, label: string) => {
      const lines = base64.match(/.{1,64}/g) || [];
      return `-----BEGIN ${label}-----\n${lines.join('\n')}\n-----END ${label}-----\n`;
    };

    const privatePem = toPem(toBase64(privPkcs8), 'PRIVATE KEY');
    const publicPem = toPem(toBase64(pubSpki), 'PUBLIC KEY');

    // Build OpenSSH public key blob: string "ecdsa-sha2-nistp256", string "nistp256", string Q (raw point)
    const encodeUInt32 = (n: number) => new Uint8Array([(n >>> 24) & 0xff, (n >>> 16) & 0xff, (n >>> 8) & 0xff, n & 0xff]);
    const encodeString = (s: Uint8Array | string) => {
      const bytes = typeof s === 'string' ? new TextEncoder().encode(s) : s;
      const len = encodeUInt32(bytes.length);
      return new Uint8Array([...len, ...bytes]);
    };

    const algName = 'ecdsa-sha2-nistp256';
    const curveName = 'nistp256';
    const pubKeyBlob = new Uint8Array([
      ...encodeString(algName),
      ...encodeString(curveName),
      ...encodeString(pubRaw),
    ]);
    const openSshPub = `${algName} ${toBase64(pubKeyBlob)}${config?.comment ? ' ' + config.comment : ''}`;

    const outPub = (config?.format === 'pem' || config?.format === 'pkcs8') ? publicPem : openSshPub;
    const outPriv = privatePem;
    return {
      publicKey: outPub,
      privateKey: outPriv,
    };
  }

  // Node environment: use sshpk as before
  const sshpkMod = await import('sshpk');
  const privKey = sshpkMod.generatePrivateKey('ecdsa', {
    curve: config?.curve,
  });
  privKey.comment = config?.comment;

  const pubFormat = config.format ?? 'ssh';
  let privFormat: string = config.format ?? 'ssh';
  if (privFormat === 'ssh') {
    privFormat = 'ssh-private';
  }
  const pubKey = privKey.toPublic();
  return {
    publicKey: pubKey.toString(pubFormat),
    privateKey: config?.password
      ? privKey.toString(privFormat,
        {
          passphrase: config?.password,
          comment: config?.comment,
        },
      )
      : privKey.toString(privFormat, { comment: config?.comment }),
  };
}
