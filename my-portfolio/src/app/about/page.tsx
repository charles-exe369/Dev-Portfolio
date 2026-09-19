import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        About Me
      </h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
        Here's a bit more about my journey, technical skills, and what I enjoy building.
      </p>
      
      {/* Back link using Next.js Link component */}
      <Link 
        href="/" 
        className="inline-block mt-6 text-sm font-medium text-blue-600 hover:underline"
      >
        ← Back to Home
      </Link>
    </main>
  );
}