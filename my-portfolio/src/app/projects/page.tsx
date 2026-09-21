import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { ExternalLink, Sparkles, FolderGit2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa'; // or SiGithub from 'react-icons/si'
export const metadata: Metadata = {
  title: 'Projects',
  description: 'Featured web development projects and software built by Charles Osi.',
};

interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    slug: 'expense-tracker',
    title: 'Personal Finance Tracker',
    description: 'A full-stack expense tracking app with real-time budget analytics, interactive spending charts, and customizable categories built with React, Next.js App Router, and Tailwind CSS.',
    image: '/projects/expense-tracker.png',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Recharts'],
    githubUrl: 'https://github.com/charles-exe/expense-tracker',
    liveUrl: 'https://expense-tracker-demo.vercel.app',
    featured: true,
  },
  {
    slug: 'weather-app',
    title: 'Real-Time Weather Dashboard',
    description: 'Dynamic weather forecast application featuring location-based weather updates, hourly temperature graphs, air quality index metrics, and adaptive theme backgrounds.',
    image: '/projects/weather-app.png',
    tags: ['React', 'TypeScript', 'OpenWeather API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/charles-exe/weather-app',
    liveUrl: 'https://weather-app-demo.vercel.app',
    featured: true,
  },
  {
    slug: 'flashcard-app',
    title: 'Interactive Study Flashcards',
    description: 'A study assistant application featuring spaced repetition algorithms, custom deck creation, progress tracking, and lightweight state management.',
    image: '/projects/flashcard-app.png',
    tags: ['Next.js', 'TypeScript', 'Zustand', 'Tailwind CSS'],
    githubUrl: 'https://github.com/charles-exe/flashcard-app',
    liveUrl: 'https://flashcard-app-demo.vercel.app',
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      {/* PAGE HEADER */}
      <FadeIn delay={0.1} direction="up">
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-xs font-semibold">
            <FolderGit2 className="w-4 h-4" />
            <span>PORTFOLIO & LABS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Featured Projects
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            A collection of web applications, client interfaces, and software experiments focused on performance, accessibility, and modern UI design.
          </p>
        </section>
      </FadeIn>

      {/* PROJECTS GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <FadeIn key={project.slug} delay={0.15 + index * 0.1} direction="up">
            <article className="group h-full flex flex-col rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/60 hover:bg-zinc-100/90 dark:hover:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all overflow-hidden shadow-sm hover:shadow-md">
              {/* IMAGE PREVIEW FRAME */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-800">
                <Image
                  src={project.image}
                  alt={`Screenshot preview of ${project.title}`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {project.featured && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-zinc-900/80 dark:bg-zinc-100/90 text-zinc-100 dark:text-zinc-900 text-[10px] font-mono font-medium flex items-center gap-1 backdrop-blur-sm">
                    <Sparkles className="w-3 h-3 text-amber-400 dark:text-amber-600" />
                    Featured
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* TAGS */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-200/70 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-300/50 dark:border-zinc-700/50"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* ACTION LINKS */}
                  <div className="flex items-center justify-between pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60 text-xs">
                    {project.githubUrl && (
                   <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-mono"
                    >
                    <FaGithub className="w-4 h-4" />
                    Code
                    </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-medium text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Live Demo <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </section>
    </main>
  );
}