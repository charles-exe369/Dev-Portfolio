import { getProjectBySlug } from '@/lib/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Fetch project markdown data by slug
  const project = await getProjectBySlug(slug);

  // If no matching .md file was found in content/projects/, return a 404 page
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
      
      <p className="text-sm text-zinc-500 mt-1">
        Published on {project.date}
      </p>

      {/* Render converted Markdown HTML string securely */}
      <article
        className="mt-8 prose dark:prose-invert max-w-none space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: project.contentHtml || '' }}
      />
    </main>
  );
}