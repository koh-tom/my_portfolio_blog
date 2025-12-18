import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "名前が入力されていません。")
    .max(16, "最大16文字までです。"),

  email: z
    .string()
    .min(1, "メールアドレスが入力されていません。")
    .email("メールアドレスの形式で入力してください。"),

  subject: z
    .string()
    .min(1, "件名が入力されていません。")
    .max(50, "最大50文字までです。"),

  message: z
    .string()
    .min(1, "本文が入力されていません。")
    .max(200, "最大200文字までです。"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
