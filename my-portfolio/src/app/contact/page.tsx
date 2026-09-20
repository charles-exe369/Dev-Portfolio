import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch for software development opportunities or collaboration.',
};

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        Get in Touch
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Have a project in mind or want to collaborate? Send me a message below.
      </p>

      <ContactForm />
    </main>
  );
}