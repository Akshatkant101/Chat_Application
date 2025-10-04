import { z } from "zod";
export const createChatSchema = z
  .object({
    title: z
      .string()
      .min(4, { message: "chat title must be 4 characters long" })
      .max(191, { message: "chat title must be less than 191 characters " }),
    passcode: z
      .string()
      .min(4, { message: "chat passcode must be 4 characters long" })
      .max(25, { message: "chat title must be less than 25 characters " }),
  })
  .required();

export type createChatTypeSchema = z.infer<typeof createChatSchema>;
