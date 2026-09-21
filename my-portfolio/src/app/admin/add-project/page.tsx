'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function AddProjectPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [featured, setFeatured] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile || !title || !description) {
      alert('Please fill in all required fields and upload an image.');
      return;
    }

    setLoading(true);

    try {
      // 1. Upload screenshot to Supabase Storage
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `screenshots/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('project-screenshots')
        .upload(filePath, imageFile);

      if (uploadError) throw uploadError;

      // 2. Get Public URL of the uploaded image
      const { data: urlData } = supabase.storage
        .from('project-screenshots')
        .getPublicUrl(filePath);

      const imageUrl = urlData.publicUrl;

      // 3. Format tech stack tags array
      const tags = tagsInput
        .split(',')
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0);

      // 4. Save project details into Database
      const { error: dbError } = await supabase.from('projects').insert([
        {
          title,
          description,
          image_url: imageUrl,
          tags,
          github_url: githubUrl || null,
          live_url: liveUrl || null,
          featured,
        },
      ]);

      if (dbError) throw dbError;

      alert('Project added successfully!');
      router.push('/projects');
    } catch (error: any) {
      console.error(error);
      alert(`Error adding project: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        Add New Project
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-mono mb-1 text-zinc-700 dark:text-zinc-300">
            Project Title *
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-sm"
            placeholder="e.g. Personal Finance Tracker"
          />
        </div>

        <div>
          <label className="block text-xs font-mono mb-1 text-zinc-700 dark:text-zinc-300">
            Description *
          </label>
          <textarea
            required
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-sm"
            placeholder="Overview of features, architecture, and technology..."
          />
        </div>

        <div>
          <label className="block text-xs font-mono mb-1 text-zinc-700 dark:text-zinc-300">
            Screenshot Image *
          </label>
          <input
            type="file"
            accept="image/*"
            required
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            className="w-full text-xs text-zinc-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
          />
        </div>

        <div>
          <label className="block text-xs font-mono mb-1 text-zinc-700 dark:text-zinc-300">
            Tech Stack Tags (Comma separated)
          </label>
          <input
            type="text"
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-sm"
            placeholder="React, Next.js, TypeScript, Tailwind CSS"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono mb-1 text-zinc-700 dark:text-zinc-300">
              GitHub URL
            </label>
            <input
              type="url"
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-sm"
              placeholder="https://github.com/..."
            />
          </div>

          <div>
            <label className="block text-xs font-mono mb-1 text-zinc-700 dark:text-zinc-300">
              Live Demo URL
            </label>
            <input
              type="url"
              value={liveUrl}
              onChange={(e) => setLiveUrl(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-sm"
              placeholder="https://my-app.vercel.app"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2">
          <input
            type="checkbox"
            id="featured"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
            className="rounded border-zinc-300"
          />
          <label htmlFor="featured" className="text-xs font-mono text-zinc-700 dark:text-zinc-300">
            Highlight as Featured Project
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition disabled:opacity-50"
        >
          {loading ? 'Uploading & Saving...' : 'Publish Project'}
        </button>
      </form>
    </main>
  );
}