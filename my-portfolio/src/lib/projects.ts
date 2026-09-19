import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Path pointing to /content/projects
const projectsDirectory = path.join(process.cwd(), 'content/projects');

export interface ProjectData {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  contentHtml?: string;
}

// 1. Get all projects (for the /projects listing page)
export function getAllProjects(): ProjectData[] {
  // Read all filenames inside content/projects
  const fileNames = fs.readdirSync(projectsDirectory);

  const allProjectsData = fileNames.map((fileName) => {
    // Remove ".md" extension to get the slug
    const slug = fileName.replace(/\.md$/, '');

    // Read markdown file content as a string
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Parse the YAML frontmatter section using gray-matter
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      tags: data.tags || [],
    };
  });

  // Sort projects by date descending
  return allProjectsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// 2. Get a single project by slug (for /projects/[slug])
export async function getProjectBySlug(slug: string): Promise<ProjectData | null> {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Parse frontmatter (data) and raw markdown text (content)
    const { data, content } = matter(fileContents);

    // Convert raw Markdown text into HTML string
    const processedContent = await remark()
      .use(html)
      .process(content);

    const contentHtml = processedContent.toString();

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      tags: data.tags || [],
      contentHtml,
    };
  } catch {
    return null; // Return null if file doesn't exist
  }
}