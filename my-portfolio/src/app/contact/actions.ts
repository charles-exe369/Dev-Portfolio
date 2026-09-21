'use server';

import { Resend } from 'resend';

// Initialize the Resend SDK with your secret API key
const resend = new Resend(process.env.RESEND_API_KEY);

export interface FormState {
  success: boolean;
  message: string;
}

export async function sendContactMessage(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // 1. Basic Validation
  if (!name || !email || !message) {
    return {
      success: false,
      message: 'All fields are required.',
    };
  }

  if (!email.includes('@')) {
    return {
      success: false,
      message: 'Please enter a valid email address.',
    };
  }

  try {
    // 2. Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Resend's free testing sender domain
      to: [process.env.CONTACT_EMAIL || 'your_email@example.com'], // Receives the email notification
      replyTo: email, // Clicking "Reply" in your email inbox replies directly to the visitor
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <blockquote style="background: #f9f9f9; border-left: 4px solid #0066cc; padding: 12px 16px; margin: 0;">
            ${message.replace(/\n/g, '<br />')}
          </blockquote>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return {
        success: false,
        message: 'Failed to send message. Please try again later.',
      };
    }

    return {
      success: true,
      message: 'Thank you! Your message has been delivered to my inbox.',
    };
  } catch (err) {
    console.error('Unexpected Error:', err);
    return {
      success: false,
      message: 'An error occurred while sending your message.',
    };
  }
}