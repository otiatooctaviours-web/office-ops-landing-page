import { z } from 'zod';
export const contactSchema = z.object({
 name: z.string().trim().min(2, 'Please enter your name.').max(100),
 email: z.string().trim().email('Please enter a valid work email.').max(255).transform(v => v.toLowerCase()),
 company: z.string().trim().min(2, 'Please enter your company.').max(150),
 phone: z.string().trim().min(7, 'Please enter a valid phone number.').max(25).regex(/^[+\d\s()\-]+$/, 'Please enter a valid phone number.'),
 team_size: z.enum(['1–25', '26–150', '151+']),
 plan: z.enum(['Starter', 'Business', 'Enterprise', 'Not sure yet']),
 message: z.string().trim().max(2000),
 website: z.string().max(0).optional(),
});
