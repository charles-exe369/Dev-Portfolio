import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllProjects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A showcase of web applications and software projects I have built.',
};

export default function ProjectsPage() {
  // Read all project metadata from content/projects/*.md files
  const projects = getAllProjects();

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        Featured Projects
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Explore some of the applications and software tools I've built recently.
      </p>

      <div className="mt-8 space-y-4">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-400 dark:hover:border-zinc-700 transition"
          >
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {project.title}
              </h2>
              <span className="text-xs text-zinc-500">{project.date}</span>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
              {project.description}
            </p>

            {/* Tags rendering */}
            <div className="flex gap-2 mt-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2.5 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline"
            >
              Read Documentation →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}