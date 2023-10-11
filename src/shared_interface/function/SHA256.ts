import { sha256 } from 'js-sha256';

export function encryptPassword(password:any) {
  const passwordHash = sha256(password);
  return passwordHash;
}