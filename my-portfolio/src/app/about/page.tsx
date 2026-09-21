import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Code2, Cpu, Wrench, GraduationCap, Laptop, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'Background, technical philosophy, and experience of Charles Osi (@charles_exe).',
};

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 space-y-12">
      {/* HEADER SECTION */}
      <section className="space-y-4">
        <div className="flex items-center gap-4">
          <Image
            src="/profile.jpg"
            alt="Charles Osi"
            width={72}
            height={72}
            className="rounded-full object-cover border-2 border-zinc-200 dark:border-zinc-800 shadow-sm"
          />
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              About Me
            </h1>
            <p className="text-sm font-mono text-blue-600 dark:text-blue-400">
              Charles Osi · @charles_exe
            </p>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
          I&apos;m a Full-Stack Web Developer and Computer Science student passionate about crafting clean, reliable web software. I build intuitive client interfaces using modern frontend tools and pair them with robust server solutions.
        </p>
      </section>

      {/* BACKGROUND & PHILOSOPHY */}
      <section className="space-y-4 border-t border-zinc-200 dark:border-zinc-800/80 pt-8">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-blue-500" />
          Background & Focus
        </h2>

        <div className="prose dark:prose-invert max-w-none text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
          <p>
            My interest in web development started with experimenting with core web technologies, which naturally evolved into building production-ready applications with React, Next.js, TypeScript, and PHP.
          </p>
          <p>
            I care deeply about software ergonomics—ensuring that the code behind an application is as structured and readable as the UI is responsive and accessible for the end user.
          </p>
        </div>
      </section>

      {/* DETAILED SKILLS & TOOLKIT */}
      <section className="space-y-6 border-t border-zinc-200 dark:border-zinc-800/80 pt-8">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-violet-500" />
          Skills & Technical Capabilities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Skill Group 1 */}
          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 space-y-2">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm">
              <Code2 className="w-4 h-4" />
              Frontend Development
            </div>
            <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1 list-disc list-inside">
              <li>React & Next.js (App Router)</li>
              <li>TypeScript & Modern JavaScript</li>
              <li>Tailwind CSS & Component Architecture</li>
              <li>Responsive Design & Accessibility</li>
            </ul>
          </div>

          {/* Skill Group 2 */}
          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 space-y-2">
            <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 font-semibold text-sm">
              <Cpu className="w-4 h-4" />
              Backend & Server Architecture
            </div>
            <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1 list-disc list-inside">
              <li>Next.js Server Actions & API Routes</li>
              <li>PHP & MySQL Database Management</li>
              <li>Node.js & RESTful Services</li>
              <li>Form Handling & Email Integrations</li>
            </ul>
          </div>

          {/* Skill Group 3 */}
          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 space-y-2">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm">
              <Wrench className="w-4 h-4" />
              Development Environment
            </div>
            <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1 list-disc list-inside">
              <li>macOS Workflow & Terminal</li>
              <li>Git Version Control & GitHub</li>
              <li>Figma UI Prototyping</li>
              <li>Vercel CI/CD Deployment</li>
            </ul>
          </div>

          {/* Skill Group 4 */}
          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 space-y-2">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-semibold text-sm">
              <Laptop className="w-4 h-4" />
              Engineering Practices
            </div>
            <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1 list-disc list-inside">
              <li>Static Site Generation (SSG)</li>
              <li>Dynamic Metadata & SEO Optimization</li>
              <li>Clean Architecture & Reusable Hooks</li>
              <li>UI Motion & Content Creation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
            Interested in collaborating?
          </h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            I&apos;m open for projects, code reviews, and software roles.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs rounded-lg transition inline-flex items-center gap-1.5 whitespace-nowrap"
        >
          Contact Me <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </section>
    </main>
  );
}