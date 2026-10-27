import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your full name.").max(100, "Keep your name under 100 characters."),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  subject: z.string().trim().min(1, "Please enter a subject.").max(150, "Keep the subject under 150 characters."),
  message: z.string().trim().min(1, "Please enter a message.").max(2000, "Keep your message under 2,000 characters."),
  website: z.string().max(0, "Unable to submit this message."),
});