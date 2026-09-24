import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import FadeIn from '@/components/FadeIn';
import { ArrowUpRight, Code2, Database, Wrench, Sparkles, Terminal, ExternalLink, GitBranch } from 'lucide-react';

// FORCE DYNAMIC REVALIDATION FOR REAL-TIME DATABASE SYNC
export const revalidate = 0;

interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  tags: string[];
  github_url?: string;
  live_url?: string;
  created_at: string;
}

export default async function HomePage() {
  // Fetch top 3 latest projects directly from Supabase
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(3);

  if (error) {
    console.error('Error fetching featured projects:', error.message);
  }

  const featuredProjects: Project[] = projects || [];

  return (
    <main className="max-w-2xl mx-auto px-4 py-12 space-y-16">
      {/* HERO SECTION */}
      <FadeIn delay={0.1} direction="up">
        <section className="space-y-6">
          {/* Profile Header Block */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Image
                src="/profile.jpg"
                alt="Charles Osi"
                width={80}
                height={80}
                priority
                className="rounded-full object-cover border-2 border-zinc-200 dark:border-zinc-800 shadow-md"
              />
              {/* Online Status Dot */}
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-zinc-950 rounded-full" />
            </div>

            <div className="space-y-1">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Charles Patrick
              </h2>
              <p className="text-xs font-mono text-blue-600 dark:text-blue-400">
                @charles_exe
              </p>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Available for projects & roles
              </div>
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
              Full-Stack Developer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
                & UI Craftsman
              </span>
            </h1>
          </div>

          {/* Bio */}
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Crafting high-performance web applications with <span className="font-semibold text-zinc-900 dark:text-zinc-100">Next.js</span>, <span className="font-semibold text-zinc-900 dark:text-zinc-100">TypeScript</span>, and <span className="font-semibold text-zinc-900 dark:text-zinc-100">Tailwind CSS</span>. Focused on clean architecture, smooth UI animations, and full-stack integration.
          </p>

          {/* Action Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/projects"
              className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-medium text-sm rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              Explore Projects <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium text-sm rounded-xl transition"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </FadeIn>

      {/* TECH STACK GRID */}
      <FadeIn delay={0.2} direction="up">
        <section className="space-y-6 pt-6 border-t border-zinc-200 dark:border-zinc-800/80">
          <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
            <Terminal className="w-5 h-5 text-blue-500" />
            <h2 className="text-xl font-bold tracking-tight">Technical Arsenal</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <Code2 className="w-4 h-4" />
                <span className="font-semibold text-xs tracking-wider uppercase">Frontend</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((item) => (
                  <span key={item} className="text-xs px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/60 font-medium text-zinc-700 dark:text-zinc-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
              <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400">
                <Database className="w-4 h-4" />
                <span className="font-semibold text-xs tracking-wider uppercase">Backend</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Server Actions', 'Node.js', 'PHP', 'MySQL', 'Supabase'].map((item) => (
                  <span key={item} className="text-xs px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/60 font-medium text-zinc-700 dark:text-zinc-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <Wrench className="w-4 h-4" />
                <span className="font-semibold text-xs tracking-wider uppercase">Workflow</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Git', 'Figma', 'macOS', 'Vercel'].map((item) => (
                  <span key={item} className="text-xs px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/60 font-medium text-zinc-700 dark:text-zinc-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* FEATURED PROJECTS (SUPABASE DRIVEN) */}
      <FadeIn delay={0.3} direction="up">
        <section className="space-y-6 pt-6 border-t border-zinc-200 dark:border-zinc-800/80">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Featured Work
              </h2>
            </div>
            <Link href="/projects" className="text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline">
              view_all() →
            </Link>
          </div>

          <div className="grid gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group overflow-hidden rounded-2xl bg-zinc-50/60 dark:bg-zinc-900/60 hover:bg-zinc-100/80 dark:hover:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all space-y-4 p-5 shadow-sm hover:shadow-md"
              >
                {/* Project Screenshot Display */}
                {project.image_url && (
                  <div className="relative w-full h-48 rounded-xl overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                    <Image
                      src={project.image_url}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-zinc-200/50 dark:border-zinc-800/50">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-200/70 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-300/50 dark:border-zinc-700/50"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 inline-flex items-center gap-1 transition-colors"
                      >
                        <GitBranch className="w-3.5 h-3.5" /> Code
                      </a>
                    )}
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-blue-600 dark:text-blue-400 inline-flex items-center gap-1 hover:underline"
                      >
                        Live Demo <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {featuredProjects.length === 0 && (
              <p className="text-sm text-zinc-500 font-mono py-4 text-center">
                No projects found. Add one from the admin panel!
              </p>
            )}
          </div>
        </section>
      </FadeIn>
    </main>
  );
}