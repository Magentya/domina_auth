import { z } from 'nestjs-zod/z';

export const LoginSchema = z.object({
  mail: z.string().email().describe('The mail'),
  password: z.string().describe('The password'),
});
