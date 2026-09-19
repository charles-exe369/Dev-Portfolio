import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="max-w-2xl mx-auto px-4 pt-8 pb-4 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
      <Link href="/" className="font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600">
        dev.portfolio
      </Link>
      <nav className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
        <Link href="/" className="hover:text-zinc-900 dark:hover:text-zinc-100">
          Home
        </Link>
        <Link href="/about" className="hover:text-zinc-900 dark:hover:text-zinc-100">
          About
        </Link>
        <Link href="/projects" className="hover:text-zinc-900 dark:hover:text-zinc-100">
          Projects
        </Link>
      </nav>
    </header>
  );
}