import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { contactSchema } from '$lib/schema/schema';
import { zod } from 'sveltekit-superforms/adapters';
import { supabase } from '$lib/supabaseClient';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(contactSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(contactSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const { error } = await supabase.from('contact_form').insert({
			name: form.data.name,
			email: form.data.email,
			date: form.data.date,
			referral: form.data.referral,
			message: form.data.message
		});

		const resend = new Resend(RESEND_API_KEY);

		await resend.emails.send({
			from: 'Info <info@spphoto.no>',
			to: ['stefan@spphoto.no'],
			subject: 'Ny henvendelse - Bryllupsfotografering',
			html: `
							<!DOCTYPE html>
		<html>
		<head>
		    <style>
		        body {
		            font-family: Arial, sans-serif;
		            line-height: 1.6;
		            margin: 0;
		            padding: 0;
		            background-color: #f4f4f4;
		        }
		        .email-container {
		            max-width: 600px;
		            margin: 20px auto;
		            background: #ffffff;
		            border: 1px solid #ddd;
		            border-radius: 8px;
		            overflow: hidden;
		        }
		        .header {
		            background: #333;
		            padding: 20px;
		            text-align: center;
		        }
		        .header img {
		            max-width: 250px;
		        }
		        .content {
		            padding: 20px;
		        }
		        .content h1 {
		            color: #333;
		            font-size: 24px;
		            margin-bottom: 20px;
		        }
		        .content p {
		            margin: 10px 0;
		        }
		        .footer {
		            background: #f4f4f4;
		            padding: 10px;
		            text-align: center;
		            font-size: 12px;
		            color: #666;
		        }
		        .footer a {
		            color: #0073e6;
		            text-decoration: none;
		        }
		    </style>
		</head>
		<body>
		    <div class="email-container">
		        <!-- Header with Logo -->
		        <div class="header">
		            <img src="https://imagedelivery.net/UUfX0V8GvcXeuhn6hz0E7A/27a16ae0-3d27-4e1a-6e85-d4259162dd00/w=250" alt="Logo" />
		        </div>

		        <!-- Content Section -->
		        <div class="content">
		            <h1>Ny henvendelse</h1>
		            <p><strong>Navn:</strong> ${form.data.name}</p>
		            <p><strong>E-post:</strong> ${form.data.email}</p>
		            <p><strong>Dato:</strong> ${form.data.date}</p>
		            <p><strong>Hvordan fant du meg:</strong> ${form.data.referral}</p>
		            <p><strong>Melding:</strong></p>
		            <p>${form.data.message}</p>
		        </div>

		        <!-- Footer -->
		        <div class="footer">
		            <p>© ${new Date().getFullYear()} Stefan Pakaski Photography (BY PAKASKI). All rights reserved.</p>
		            <p><a href="https://stefanpakaskiphotography.no">Besøk nettsiden</a></p>
		        </div>
		    </div>
		</body>
		</html>
						`
		});

		return {
			form
		};
	}
};
