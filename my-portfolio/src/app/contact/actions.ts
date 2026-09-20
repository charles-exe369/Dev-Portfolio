'use server';

export interface FormState {
  success: boolean;
  message: string;
}

export async function sendContactMessage(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Extract inputs directly from browser FormData
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // 1. Basic Server-side Validation
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
    // 2. Perform Server Task (e.g., Send email via Resend/SendGrid or save to Database)
    console.log('--- Contact Form Submitted on Server ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
    };
  } catch (error) {
    console.error('Contact Form Error:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}