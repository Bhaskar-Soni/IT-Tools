<script setup lang="ts">
import TextareaCopyable from '@/components/TextareaCopyable.vue';

const HEADER = '$ANSIBLE_VAULT';
const AES256 = 'AES256';
const DIGEST = 'SHA-256';
const ITERATIONS = 10000;
const DERIVED_LEN = 80; // 32 key + 32 hmac + 16 iv

const encoder = new TextEncoder();
const decoder = new TextDecoder();

const decryptedInput = ref('');
const encryptPassword = ref('');
const encryptId = ref('');

const cryptedInput = ref('');
const decryptPassword = ref('');

function hexlifyString(str: string): string {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const digit = str.charCodeAt(i).toString(16);
    result += (`00${digit}`).slice(-2);
  }
  return result;
}

function unhexlifyString(str: string): string {
  let result = '';
  for (let i = 0; i < str.length; i += 2) {
    result += String.fromCharCode(parseInt(str.slice(i, i + 2), 16));
  }
  return result;
}

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
}

function hexToBytes(hex: string): Uint8Array {
  const out = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    out[i / 2] = parseInt(hex.slice(i, i + 2), 16);
  }
  return out;
}

function pkcs7Pad(bytes: Uint8Array, blockSize = 16): Uint8Array {
  const padLen = blockSize - (bytes.length % blockSize || blockSize);
  const out = new Uint8Array(bytes.length + padLen);
  out.set(bytes);
  out.fill(padLen, bytes.length);
  return out;
}

function pkcs7Unpad(bytes: Uint8Array): Uint8Array {
  const padLen = bytes[bytes.length - 1];
  return bytes.slice(0, bytes.length - padLen);
}

async function deriveKeys(password: string, salt: Uint8Array) {
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveBits'],
  );
  const bits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt,
      iterations: ITERATIONS,
      hash: DIGEST,
    },
    keyMaterial,
    DERIVED_LEN * 8,
  );
  const derived = new Uint8Array(bits);
  return {
    key: derived.slice(0, 32),
    hmacKey: derived.slice(32, 64),
    iv: derived.slice(64, 80),
  };
}

async function hmacSha256(key: Uint8Array, data: Uint8Array): Promise<Uint8Array> {
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    key,
    { name: 'HMAC', hash: DIGEST },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', cryptoKey, data);
  return new Uint8Array(sig);
}

function timingSafeEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}

async function aesCtrEncrypt(key: Uint8Array, iv: Uint8Array, data: Uint8Array): Promise<Uint8Array> {
  const cryptoKey = await crypto.subtle.importKey('raw', key, 'AES-CTR', false, ['encrypt']);
  const encrypted = await crypto.subtle.encrypt(
    { name: 'AES-CTR', counter: iv, length: 128 },
    cryptoKey,
    data,
  );
  return new Uint8Array(encrypted);
}

async function aesCtrDecrypt(key: Uint8Array, iv: Uint8Array, data: Uint8Array): Promise<Uint8Array> {
  const cryptoKey = await crypto.subtle.importKey('raw', key, 'AES-CTR', false, ['decrypt']);
  const decrypted = await crypto.subtle.decrypt(
    { name: 'AES-CTR', counter: iv, length: 128 },
    cryptoKey,
    data,
  );
  return new Uint8Array(decrypted);
}

function packVault(id: string, hex: string) {
  const header = id
    ? `${HEADER};1.2;${AES256};${id}\n`
    : `${HEADER};1.1;${AES256}\n`;
  const body = hexlifyString(hex).match(/.{1,80}/g)?.join('\n') ?? '';
  return header + body;
}

function unpackVault(vault: string, id?: string) {
  const [header, ...hexLines] = vault.split(/\r?\n/);
  if (!header) throw new Error('Bad vault header');
  const [_header, version, cipher, headerId = true] = header.split(';');
  if (_header !== HEADER || !/^1\.[12]$/.test(version) || cipher !== AES256) {
    throw new Error('Bad vault header');
  }
  if (id && id !== headerId) return undefined;
  const hexText = unhexlifyString(hexLines.join(''));
  const [saltHex, hmacHex, ciphertextHex] = hexText.split(/\r?\n/);
  if (!saltHex || !hmacHex || !ciphertextHex) throw new Error('Invalid vault payload');
  return {
    salt: hexToBytes(saltHex),
    hmac: hexToBytes(hmacHex),
    ciphertext: hexToBytes(ciphertextHex),
  };
}

async function encryptVault(secret: string, password: string, id: string) {
  if (!password) throw new Error('No password');
  const salt = crypto.getRandomValues(new Uint8Array(32));
  const { key, hmacKey, iv } = await deriveKeys(password, salt);
  const padded = pkcs7Pad(encoder.encode(secret), 16);
  const ciphertext = await aesCtrEncrypt(key, iv, padded);
  const hmac = await hmacSha256(hmacKey, ciphertext);
  const hex = [salt, hmac, ciphertext].map(bytesToHex).join('\n');
  return packVault(id, hex);
}

async function decryptVault(vault: string, password: string, id?: string) {
  if (!password) throw new Error('No password');
  const unpacked = unpackVault(vault, id);
  if (!unpacked) return '';
  const { key, hmacKey, iv } = await deriveKeys(password, unpacked.salt);
  const hmacComp = await hmacSha256(hmacKey, unpacked.ciphertext);
  if (!timingSafeEqual(hmacComp, unpacked.hmac)) {
    throw new Error('Integrity check failed');
  }
  const padded = await aesCtrDecrypt(key, iv, unpacked.ciphertext);
  return decoder.decode(pkcs7Unpad(padded));
}

const cryptedOutput = computedAsync(async () => {
  try {
    return await encryptVault(decryptedInput.value, encryptPassword.value, encryptId.value);
  }
  catch (e: any) {
    return e.toString();
  }
});

const decryptedOutput = computedAsync(async () => {
  try {
    const cleaned = cryptedInput.value?.replace(/\r(?!\n)/, '\n');
    return await decryptVault(cleaned, decryptPassword.value);
  }
  catch (e: any) {
    return e.toString();
  }
});
</script>

<template>
  <c-card title="Encrypt Ansible Vault Secret">
    <c-input-text
      v-model:value="decryptedInput"
      placeholder="Put your string to encrypt..."
      label="String to encrypt"
      raw-text
      mb-5
    />

    <n-space>
      <c-input-text
        v-model:value="encryptPassword"
        placeholder="Encryption password"
        label="Encryption password"
        raw-text
        mb-5
      />
      <c-input-text
        v-model:value="encryptId"
        placeholder="Encryption Id"
        label="Encryption Id"
        raw-text
        mb-5
      />
    </n-space>

    <n-divider />

    <TextareaCopyable
      label="Encrypted string"
      :value="cryptedOutput"
      multiline
      readonly
      rows="5"
      mb-5
    />
  </c-card>

  <c-card title="Decrypt Ansible Vault Secret">
    <c-input-text
      v-model:value="cryptedInput"
      placeholder="Put your encrypted string here..."
      label="String to decrypt"
      raw-text multiline mb-5
      rows="5"
    />

    <c-input-text
      v-model:value="decryptPassword"
      placeholder="Decryption password"
      label="Decryption password"
      raw-text
      mb-5
    />

    <n-divider />

    <TextareaCopyable
      label="Decrypted string"
      :value="decryptedOutput"
      multiline
      readonly
      rows="5"
      mb-5
    />
  </c-card>
</template>
