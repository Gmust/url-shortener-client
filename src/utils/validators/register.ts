import { z } from 'zod';

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
);

export const registerValidator = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  surname: z.string().min(1),
  password: z.string().min(8).regex(passwordValidation, {
    message: 'Your password must contain: Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
  }),
  confirmPassword: z.string().min(8, 'Password must be at least 8 symbols'),
}).refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: 'Passwords does not match',
});
