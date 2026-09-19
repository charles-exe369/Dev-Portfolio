interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  // Await the URL params object in Next.js App Router
  const { slug } = await params;

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
        Project Showcase
      </span>
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mt-2 capitalize">
        {slug.replace('-', ' ')}
      </h1>

      <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
        You are currently viewing the dynamic detail page for{' '}
        <strong className="text-zinc-900 dark:text-zinc-100">{slug}</strong>.
      </p>

      <div className="mt-6 p-4 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 text-sm font-mono text-zinc-700 dark:text-zinc-300">
        URL Parameter captured: <span className="text-blue-500">params.slug = "{slug}"</span>
      </div>
    </main>
  );
}