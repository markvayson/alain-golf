import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  ghinNumber: z.coerce.number(),
  password: z.string().min(8),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const contactSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(3)
    .regex(/^[A-Za-z\s]+$/, "Invalid first name"),
  lastName: z
    .string()
    .trim()
    .min(3)
    .regex(/^[A-Za-z\s]+$/, "Invalid last name"),
  email: z.string().trim().email(),
  phoneNumber: z
    .string()
    .regex(/^[0-9+()-\s]+$/, "Invalid phone number")
    .optional(),
  comment: z.string().trim().min(3).optional(),
});

export const ratesSchema = z.object({
  courseType: z.string().trim().min(2).max(100),
  category: z.string().trim().min(2).max(100),
  weekday9h: z.coerce.number(),
  weekday18h: z.coerce.number(),
  weekend9h: z.coerce.number(),
  weekend18h: z.coerce.number(),
});
