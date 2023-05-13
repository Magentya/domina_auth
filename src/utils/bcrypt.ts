import * as bcrypt from 'bcrypt';

export const hashPassword = (password: string): string => {
  return bcrypt.hashSync(password, 10);
};

export const validatePassword = (
  password: string,
  hashPassword: string,
): boolean => {
  return bcrypt.compareSync(password, hashPassword);
};
