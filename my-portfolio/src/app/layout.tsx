import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

//Global metadata setup
export const metadata: Metadata = {
  title: {
    default: 'Charles Patrick - Frontend & Full-Stack Developer',
    template: '%s | Charles Patrick',
  },
  description: 'Portfolio of Charles Patrick, a Frontend & Full-Stack Developer specializing in building clean, modern web applications.',
  openGraph: {
    title: 'Charles Patrick - Frontend & Full-Stack Developer',
    description: 'Portfolio of Charles Patrick, a Frontend & Full-Stack Developer specializing in building clean, modern web applications.',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning prevents warnings when next-themes modifies the <html> class
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 min-h-screen transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}