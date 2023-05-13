import { z } from 'nestjs-zod/z';

export const CreateUserSchema = z.object({
  mail: z.string().email().describe('The mail'),
  username: z.string().describe('The username'),
  password: z.string().describe('The password'),
});
