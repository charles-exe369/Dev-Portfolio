import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <div className="flex items-center gap-4">
        <Image
          src="/profile.jpg"
          alt="Profile headshot"
          width={80}
          height={80}
          className="rounded-full object-cover border border-zinc-200 dark:border-zinc-800"
          priority
        />
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Charles Patrick
          </h1>
          <p className="text-sm text-zinc-500">Frontend & Full-Stack Developer</p>
        </div>
      </div>

      <p className="mt-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
        Welcome to my portfolio! I build clean, modern web applications.
      </p>
    </main>
  );
}