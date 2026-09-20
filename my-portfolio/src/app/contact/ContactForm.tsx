'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { sendContactMessage, FormState } from './actions';

const initialState: FormState = {
  success: false,
  message: '',
};

// Pending button state component
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium rounded-lg transition shadow-sm"
    >
      {pending ? 'Sending message...' : 'Send Message'}
    </button>
  );
}

export default function ContactForm() {
  // useActionState connects the Server Action with component state
  const [state, formAction] = useActionState(sendContactMessage, initialState);

  return (
    <form action={formAction} className="space-y-4 max-w-lg mt-6">
      {state.message && (
        <div
          className={`p-4 rounded-lg text-sm border ${
            state.success
              ? 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800'
              : 'bg-red-50 text-red-800 border-red-200 dark:bg-red-950/50 dark:text-red-300 dark:border-red-800'
          }`}
        >
          {state.message}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-zinc-700 dark:text-zinc-300">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-3.5 py-2 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-900 dark:text-zinc-100"
          placeholder="Jane Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-zinc-700 dark:text-zinc-300">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-3.5 py-2 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-900 dark:text-zinc-100"
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-zinc-700 dark:text-zinc-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-3.5 py-2 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-900 dark:text-zinc-100"
          placeholder="Hi, I'd like to talk about a project..."
        />
      </div>

      <SubmitButton />
    </form>
  );
}