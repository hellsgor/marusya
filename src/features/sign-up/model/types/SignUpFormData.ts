import { z } from 'zod/v4';

export const SignUpFormDataSchema = z
  .object({
    email: z.email('Введите корректный email'),
    name: z.string().min(1, 'Пожалуйста, заполните это поле'),
    surname: z.string().min(1, 'Пожалуйста, заполните это поле'),
    password: z
      .string()
      .min(6, 'Пароль должен содержать минимум 6 символов')
      .regex(/^[^\s]+$/, 'Пароль не должен содержать пробелы')
      .regex(
        /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/,
        'Пароль содержит недопустимые символы',
      ),
    confirmPassword: z.string().min(1, 'Подтвердите пароль'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });

export type SignUpFormDataType = z.infer<typeof SignUpFormDataSchema>;

export const SignUpApiRequestSchema = SignUpFormDataSchema.omit({
  confirmPassword: true,
});

export type SignUpApiRequestType = z.infer<typeof SignUpApiRequestSchema>;
