import { z } from 'zod';

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
);


export const resetPasswordValidator = z.object({
  password: z.string().min(8, { message: 'Password must be at least 8 symbols' }).regex(passwordValidation, {
    message: 'Your password must contain: Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
  }),
  confirmPassword: z.string().min(8, 'Password must be at least 8 symbols'),
}).refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: 'Passwords does not match',
});
