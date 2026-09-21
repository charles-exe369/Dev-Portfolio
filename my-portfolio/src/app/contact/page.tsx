import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { Mail, ArrowUpRight, MessageSquare, Send } from 'lucide-react';

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function TiktokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.28-2.52.74-5.02 2.63-6.68 1.28-1.13 2.92-1.78 4.64-1.83.16 0 .32.01.48.02v4.02c-.89-.03-1.78.22-2.51.73-.83.56-1.38 1.48-1.48 2.47-.15 1.25.38 2.5 1.38 3.23.95.7 2.2.88 3.32.5 1.12-.35 2.01-1.31 2.25-2.45.13-.71.12-1.44.12-2.16V.02z" />
    </svg>
  );
}

function WhatsappIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    name: 'WhatsApp',
    handle: 'Chat directly',
    href: 'https://wa.me/22991132401', // Replace with your phone number (e.g. 2349012345678)
    description: 'Instant messages for quick inquiries and project chats',
    icon: WhatsappIcon,
  },
  {
    name: 'TikTok',
    handle: '@charlespatrick3690',
    href: 'https://tiktok.com/@charlespatrick3690',
    description: 'Tech, lifestyle, and development content',
    icon: TiktokIcon,
  },
  {
    name: 'GitHub',
    handle: '@charles-exe369',
    href: 'https://github.com/charles-exe369',
    description: 'Open source projects, repositories, and activity',
    icon: GithubIcon,
  },
  {
    name: 'Twitter / X',
    handle: '@charles_exe369',
    href: 'https://x.com/charles_exe369',
    description: 'Thoughts on software development and tech',
    icon: TwitterIcon,
  },
];

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 space-y-12">
      {/* HEADER SECTION */}
      <FadeIn delay={0.1} direction="up">
        <section className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium">
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            Let's create something together.
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Whether you have a project in mind, a potential collaboration, or just want to connect, feel free to reach out across any of these platforms.
          </p>
        </section>
      </FadeIn>

      {/* DIRECT EMAIL CARD */}
      <FadeIn delay={0.2} direction="up">
        <section>
          <div className="p-6 rounded-2xl bg-zinc-900 dark:bg-zinc-900 text-white shadow-xl space-y-4 border border-zinc-800">
            <div className="flex items-center gap-3 text-blue-400">
              <Mail className="w-5 h-5" />
              <span className="text-xs font-mono tracking-wider uppercase font-semibold">Direct Email</span>
            </div>
            <div>
              <p className="text-sm text-zinc-400">Preferred for formal inquiries & project opportunities:</p>
              <a
                href="mailto:charlespatrick3690@gmail.com"
                className="text-xl font-bold hover:text-blue-400 transition-colors inline-flex items-center gap-2 mt-1"
              >
                charlespatrick3690@gmail.com <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* SOCIAL MEDIA GRID */}
      <FadeIn delay={0.3} direction="up">
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            Socials & Messaging
          </h2>

          <div className="grid gap-3">
            {SOCIAL_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-lg bg-zinc-200/70 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                          {item.name}
                        </h3>
                        <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                          {item.handle}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              );
            })}
          </div>
        </section>
      </FadeIn>
    </main>
  );
}