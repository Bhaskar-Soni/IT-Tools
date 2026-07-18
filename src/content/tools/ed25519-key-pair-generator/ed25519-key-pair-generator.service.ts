export { generateKeyPair };

async function generateKeyPair(config: {
  password?: string
  format?: string
  comment?: string
} = {}) {
  const runningInBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
  if (runningInBrowser) {
    // Try to generate Ed25519 keys via WebCrypto if available
    try {
      // @ts-ignore
      const keyPair = await crypto.subtle.generateKey({ name: 'Ed25519' }, true, ['sign', 'verify']);

      const pubRaw = new Uint8Array(await crypto.subtle.exportKey('raw', keyPair.publicKey as CryptoKey));
      const privPkcs8 = new Uint8Array(await crypto.subtle.exportKey('pkcs8', keyPair.privateKey as CryptoKey));

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

      const encodeUInt32 = (n: number) => new Uint8Array([(n >>> 24) & 0xff, (n >>> 16) & 0xff, (n >>> 8) & 0xff, n & 0xff]);
      const encodeString = (s: Uint8Array | string) => {
        const bytes = typeof s === 'string' ? new TextEncoder().encode(s) : s;
        const len = encodeUInt32(bytes.length);
        return new Uint8Array([...len, ...bytes]);
      };

      const algName = 'ssh-ed25519';
      const pubKeyBlob = new Uint8Array([
        ...encodeString(algName),
        ...encodeString(pubRaw),
      ]);
      const openSshPub = `${algName} ${toBase64(pubKeyBlob)}${config?.comment ? ' ' + config.comment : ''}`;

      const pubOut = (config?.format === 'pem' || config?.format === 'pkcs8') ? toPem(toBase64(pubRaw), 'PUBLIC KEY') : openSshPub;

      return {
        publicKey: pubOut,
        privateKey: privatePem,
      };
    } catch (e) {
      // fall back to server-only behavior
      // continue to attempt sshpk import below which will throw if unavailable
    }
  }

  const sshpkMod = await import('sshpk');
  const privKey = sshpkMod.generatePrivateKey('ed25519');
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
