import crypto from 'crypto';

export function validatePassword(user: any, inputPassword: string) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex');
  const passwordsMatch = user.password === inputHash;
  return passwordsMatch;
}
