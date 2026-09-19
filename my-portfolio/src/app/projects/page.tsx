import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A showcase of web applications and software projects I have built.',
};

// Mock project data
const PROJECTS = [
  {
    slug: 'expense-tracker',
    title: 'Expense Tracker App',
    description: 'A sleek financial dashboard for tracking personal expenses and budget analytics.',
  },
  {
    slug: 'weather-app',
    title: 'Real-time Weather App',
    description: 'Live weather updates and forecast visualization built using external APIs.',
  },
  {
    slug: 'flashcard-app',
    title: 'Interactive Flashcards',
    description: 'A study tool utilizing spaced repetition algorithms for quick learning.',
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        Featured Projects
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Explore some of the applications and software tools I've built recently.
      </p>

      <div className="mt-8 space-y-4">
        {PROJECTS.map((project) => (
          <div
            key={project.slug}
            className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-400 dark:hover:border-zinc-700 transition"
          >
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              {project.title}
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              {project.description}
            </p>
            <Link
              href={`/projects/${project.slug}`}
              className="inline-block mt-3 text-sm font-medium text-blue-600 hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}