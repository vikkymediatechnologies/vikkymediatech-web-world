import { z } from "zod";

export const personalInformationSchema = z.object({
  fullName: z.string().min(3, "Full name is required"),

  email: z.string().email("Invalid email"),

  phone: z.string().min(11, "Phone number is required"),

  gender: z.string().min(1, "Select gender"),

  dateOfBirth: z.string(),

  state: z.string().min(2),

  country: z.string().min(2),

  address: z.string().min(10),
});

export type PersonalInformationSchema =
  z.infer<typeof personalInformationSchema>;