'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import AdminGuard from '@/components/AdminGuard';
import Link from 'next/link';


interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  tags: string[];
}

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const fetchProjects = async () => {
    const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
    if (data) setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // DELETE Project
  const handleDelete = async (id: string, imageUrl: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    // 1. Delete image from Storage if path exists
    if (imageUrl) {
      const path = imageUrl.split('/project-screenshots/')[1];
      if (path) {
        await supabase.storage.from('project-screenshots').remove([path]);
      }
    }

    // 2. Delete row from Database
    const { error } = await supabase.from('projects').delete().eq('id', id);
    if (!error) {
      setProjects(projects.filter((p) => p.id !== id));
    } else {
      alert('Failed to delete project.');
    }
  };

  // UPDATE Project
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;

    const { error } = await supabase
      .from('projects')
      .update({
        title: editingProject.title,
        description: editingProject.description,
        tags: editingProject.tags,
      })
      .eq('id', editingProject.id);

    if (!error) {
      setEditingProject(null);
      fetchProjects();
    } else {
      alert('Failed to update project.');
    }
  };

  return (
    <AdminGuard>
      <div className="max-w-6xl mx-auto p-8 text-white">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Link
            href="/admin/add-project"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition"
          >
            + Add New Project
          </Link>
        </div>

        {/* Edit Modal / Form */}
        {editingProject && (
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 mb-8">
            <h2 className="text-xl font-bold mb-4">Edit Project</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  value={editingProject.title}
                  onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                  className="w-full p-3 bg-slate-900 border border-slate-700 rounded-lg text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  value={editingProject.description}
                  onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                  className="w-full p-3 bg-slate-900 border border-slate-700 rounded-lg text-white h-24"
                />
              </div>
              <div className="flex gap-3">
                <button type="submit" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg">
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setEditingProject(null)}
                  className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Projects Table */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-900 text-slate-400 border-b border-slate-700">
              <tr>
                <th className="p-4">Project</th>
                <th className="p-4">Tags</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b border-slate-700/50 hover:bg-slate-750">
                  <td className="p-4 font-medium">{project.title}</td>
                  <td className="p-4 text-sm text-slate-400">{project.tags?.join(', ')}</td>
                  <td className="p-4 text-right space-x-2">
                    <button
                      onClick={() => setEditingProject(project)}
                      className="bg-yellow-600/20 text-yellow-400 hover:bg-yellow-600/30 px-3 py-1 rounded text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(project.id, project.image_url)}
                      className="bg-red-600/20 text-red-400 hover:bg-red-600/30 px-3 py-1 rounded text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminGuard>
  );
}