import { z } from "zod";

export const Form = z.object({
  name: z.string().min(1, { message: "Must be more that 1 character" }),
  email: z.string().email().min(1, { message: "Invalid Email address" }),
  websiteName: z.string().optional(),
  description: z.string().min(1, { message: "Must be more that 1 character" }),
});

export type Form = z.infer<typeof Form>;
