import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_ROOT = path.join(process.cwd(), "content");

type WorkFrontmatter = {
  title: string;
  category: string;
  period: string;
  location: string;
  company: string;
  sortOrder: number;
  summary: string;
  workAnimation?: WorkAnimationKey;
  portraitImage?: string;
  portraitImageAlt?: string;
  portraitImageOrientation?: "portrait" | "landscape";
  landscapeImage?: string;
  landscapeImageAlt?: string;
  landscapeImageOrientation?: "portrait" | "landscape";
};

export type WorkAnimationKey = "taxi-route" | "ai-coach-chat";

type WorkImage = {
  src: string;
  alt: string;
  orientation: "portrait" | "landscape";
};

type EventFrontmatter = {
  title: string;
  event: string;
  year: string;
  takeaway: string;
  link: string;
  previewImage: string;
  previewImageAlt?: string;
  portraitImage?: string;
  portraitImageAlt?: string;
  landscapeImage?: string;
  landscapeImageAlt?: string;
  sortOrder: number;
};

type EventImage = {
  src: string;
  alt: string;
  orientation: "portrait" | "landscape";
};

export type WorkEntry = WorkFrontmatter & {
  slug: string;
  details: string;
  images: WorkImage[];
};

export type EventEntry = EventFrontmatter & {
  slug: string;
  details: string;
  images: EventImage[];
};

async function readMdxFiles(folderPath: string) {
  const files = await fs.readdir(folderPath);
  return files.filter((file) => file.endsWith(".mdx"));
}

export async function getWorkEntries(): Promise<WorkEntry[]> {
  const workPath = path.join(CONTENT_ROOT, "work");
  const files = await readMdxFiles(workPath);

  const entries = await Promise.all(
    files.map(async (fileName) => {
      const fullPath = path.join(workPath, fileName);
      const fileContent = await fs.readFile(fullPath, "utf8");
      const { data, content } = matter(fileContent);
      const frontmatter = data as WorkFrontmatter;
      const images: WorkImage[] = [];

      if (frontmatter.landscapeImage) {
        images.push({
          src: frontmatter.landscapeImage,
          alt: frontmatter.landscapeImageAlt || `${frontmatter.title} landscape image`,
          orientation: frontmatter.landscapeImageOrientation || "landscape",
        });
      }

      if (frontmatter.portraitImage) {
        images.push({
          src: frontmatter.portraitImage,
          alt: frontmatter.portraitImageAlt || `${frontmatter.title} portrait image`,
          orientation: frontmatter.portraitImageOrientation || "portrait",
        });
      }

      return {
        slug: fileName.replace(/\.mdx$/, ""),
        ...frontmatter,
        details: content.trim(),
        images,
      };
    }),
  );

  return entries.sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function getEventEntries(): Promise<EventEntry[]> {
  const eventsPath = path.join(CONTENT_ROOT, "events");
  const files = await readMdxFiles(eventsPath);

  const entries = await Promise.all(
    files.map(async (fileName) => {
      const fullPath = path.join(eventsPath, fileName);
      const fileContent = await fs.readFile(fullPath, "utf8");
      const { data, content } = matter(fileContent);
      const frontmatter = data as EventFrontmatter;
      const images: EventImage[] = [];

      const landscapeSrc = frontmatter.landscapeImage || frontmatter.previewImage;
      if (landscapeSrc) {
        images.push({
          src: landscapeSrc,
          alt:
            frontmatter.landscapeImageAlt ||
            frontmatter.previewImageAlt ||
            `${frontmatter.title} landscape image`,
          orientation: "landscape",
        });
      }

      if (frontmatter.portraitImage) {
        images.push({
          src: frontmatter.portraitImage,
          alt: frontmatter.portraitImageAlt || `${frontmatter.title} portrait image`,
          orientation: "portrait",
        });
      }

      return {
        slug: fileName.replace(/\.mdx$/, ""),
        ...frontmatter,
        details: content.trim(),
        images,
      };
    }),
  );

  return entries.sort((a, b) => a.sortOrder - b.sortOrder);
}
