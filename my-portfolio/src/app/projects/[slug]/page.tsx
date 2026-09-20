import type { Metadata } from 'next';
import { getProjectBySlug, getAllProjects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) return { title: 'Project Not Found' };

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <Link 
        href="/projects" 
        className="text-sm font-medium text-blue-600 hover:underline inline-block mb-6"
      >
        ← Back to Projects
      </Link>

      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        {project.title}
      </h1>
      
      <p className="text-sm text-zinc-500 mt-1 mb-8">
        Published on {project.date}
      </p>

      {/* Tailwind Typography styling container */}
      <article
        className="prose dark:prose-invert max-w-none prose-headings:font-semibold prose-a:text-blue-600 prose-img:rounded-xl"
        dangerouslySetInnerHTML={{ __html: project.contentHtml || '' }}
      />
    </main>
  );
}