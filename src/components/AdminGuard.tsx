'use client';

import { useState, useEffect, ReactNode } from 'react';

export default function AdminGuard({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = sessionStorage.getItem('admin_authenticated');
    if (saved === 'true') {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === process.env.NEXT_PUBLIC_ADMIN_SECRET) {
      sessionStorage.setItem('admin_authenticated', 'true');
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (loading) return null;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-4">
        <form onSubmit={handleLogin} className="bg-slate-800 p-6 rounded-xl border border-slate-700 w-full max-w-md shadow-2xl">
          <h2 className="text-2xl font-bold mb-2">Admin Access</h2>
          <p className="text-sm text-slate-400 mb-6">Enter your secret passcode to access the admin dashboard.</p>
          
          <input
            type="password"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            placeholder="Enter passcode..."
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-blue-500 mb-4"
          />
          
          {error && <p className="text-red-400 text-sm mb-4">Incorrect passcode. Try again.</p>}
          
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 font-semibold py-3 rounded-lg transition"
          >
            Authenticate
          </button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
}