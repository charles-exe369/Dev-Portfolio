'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="max-w-2xl mx-auto px-4 pt-8 pb-4 border-b border-zinc-200 dark:border-zinc-800 relative">
      <div className="flex justify-between items-center">
        {/* LOGO */}
        <Link 
          href="/" 
          onClick={closeMenu}
          className="font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 transition-colors"
        >
          charles.exe🪐✨
        </Link>

        {/* DESKTOP NAV & CONTROLS */}
        <div className="hidden sm:flex items-center gap-6">
          <nav className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <Link href="/" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              About
            </Link>
            <Link href="/projects" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Contact
            </Link>
            <Link href="/admin" className="text-slate-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
              Admin Area
            </Link>
          </nav>
          <ThemeToggle />
        </div>

        {/* MOBILE CONTROLS */}
        <div className="flex items-center gap-3 sm:hidden">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            type="button"
            className="p-1.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV DROPDOWN */}
      {isOpen && (
        <nav className="sm:hidden mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex flex-col gap-3 text-sm font-medium text-zinc-600 dark:text-zinc-400 animate-in fade-in slide-in-from-top-2 duration-200">
          <Link 
            href="/" 
            onClick={closeMenu}
            className="px-2 py-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/60 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            onClick={closeMenu}
            className="px-2 py-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/60 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            About
          </Link>
          <Link 
            href="/projects" 
            onClick={closeMenu}
            className="px-2 py-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/60 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Projects
          </Link>
          <Link 
            href="/contact" 
            onClick={closeMenu}
            className="px-2 py-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/60 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Contact
          </Link>
          <Link 
            href="/admin" 
            onClick={closeMenu}
            className="px-2 py-1.5 rounded-md text-slate-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Admin Area
          </Link>
        </nav>
      )}
    </header>
  );
}