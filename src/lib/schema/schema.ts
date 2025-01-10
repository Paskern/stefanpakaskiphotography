import { date, z } from 'zod';

export const contactSchema = z.object({
	name: z.string().min(3, 'Må inneholde minimum 3 tegn').max(100).nonempty('Navn er påkrevd'),
	email: z.string().email('Gyldig e-post er påkrevd'),
	date: z.string(),
	referral: z.string(),
	message: z.string().min(5, 'Må inneholde minimum 5 tegn').max(5000).nonempty('Melding er påkrevd')
});

export type ContactSchema = typeof contactSchema;
