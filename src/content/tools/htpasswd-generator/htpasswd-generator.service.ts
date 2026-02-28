import { encrypt } from 'unixcrypt-browser';
import { bcrypt } from 'hash-wasm';
import { multiRandFromArray } from '@/utils/random';

const itoa64 = './0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function getRandomBytes(length: number): Uint8Array {
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    const bytes = new Uint8Array(length);
    crypto.getRandomValues(bytes);
    return bytes;
  }
  const bytes = new Uint8Array(length);
  for (let i = 0; i < length; i++) {
    bytes[i] = Math.floor(Math.random() * 256);
  }
  return bytes;
}

function normalizeSaltBytes(salt: string | null | undefined, length: number): Uint8Array {
  if (!salt) {
    return getRandomBytes(length);
  }
  const encoder = new TextEncoder();
  const raw = encoder.encode(salt);
  if (raw.length === length) {
    return raw;
  }
  const bytes = new Uint8Array(length);
  bytes.set(raw.subarray(0, length));
  return bytes;
}

export async function generateHtpasswd({
  username,
  password,
  algorithm,
  salt = null,
  saltRounds = 10,
}: {
  username: string
  password: string
  algorithm: 'bcrypt' | 'md5' | 'apr1' | 'sha256' | 'sha512'
  salt?: string | null
  saltRounds?: number
}): Promise<string> {
  const generateSalt = (length: number) => multiRandFromArray([...itoa64], length).join('');
  let hash: string;
  const finalSalt = salt || generateSalt(algorithm === 'sha512' ? 16 : 8);
  // eslint-disable-next-line no-control-regex
  const non_ascii = /[^\x00-\x7F]/;

  switch (algorithm) {
    case 'bcrypt': {
      const saltBytes = normalizeSaltBytes(salt, 16);
      hash = await bcrypt({
        password,
        salt: saltBytes,
        costFactor: saltRounds,
        outputType: 'encoded',
      });
      break;
    }
    case 'md5':
      if (non_ascii.test(password)) {
        throw new Error('MD5 does not currently support non ASCII characters');
      }
      // unixcrypt-browser supports MD5-crypt with $1$ prefix
      hash = encrypt(password, `$1$${finalSalt}`);
      break;
    case 'apr1':
      if (non_ascii.test(password)) {
        throw new Error('MD5 does not currently support non ASCII characters');
      }
      // unixcrypt-browser supports Apache MD5 (apr1) with $apr1$ prefix
      hash = encrypt(password, `$apr1$${finalSalt}`);
      break;
    case 'sha256':
      hash = encrypt(password, `$5$${finalSalt}`);
      break;
    case 'sha512':
      hash = encrypt(password, `$6$${finalSalt}`);
      break;
    default:
      throw new Error('Unsupported algorithm');
  }

  return `${username}:${hash}`;
}
