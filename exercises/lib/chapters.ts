export type Chapter = {
  num: number;
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  estimate: string;
};

export const chapters: Chapter[] = [
  {
    num: 1,
    slug: "ch01-foundations",
    title: "React & TypeScript Foundations",
    subtitle: "The building blocks",
    tags: ["React", "TypeScript"],
    estimate: "3–4 hrs",
  },
  {
    num: 2,
    slug: "ch02-hooks",
    title: "React Hooks — Deep Dive",
    subtitle: "useState, useEffect, useMemo & friends",
    tags: ["React"],
    estimate: "4–5 hrs",
  },
  {
    num: 3,
    slug: "ch03-tailwind",
    title: "Tailwind CSS Fundamentals",
    subtitle: "Utility-first styling",
    tags: ["Tailwind"],
    estimate: "2–3 hrs",
  },
  {
    num: 4,
    slug: "ch04-shadcn",
    title: "shadcn/ui — Component Library",
    subtitle: "Own your components",
    tags: ["Tailwind", "shadcn"],
    estimate: "2–3 hrs",
  },
  {
    num: 5,
    slug: "ch05-app-router",
    title: "Next.js App Router Basics",
    subtitle: "File-based routing & layouts",
    tags: ["Next.js"],
    estimate: "3–4 hrs",
  },
  {
    num: 6,
    slug: "ch06-typescript",
    title: "TypeScript Deep Dive",
    subtitle: "Types, generics & safety",
    tags: ["TypeScript"],
    estimate: "3–4 hrs",
  },
  {
    num: 7,
    slug: "ch07-server-components",
    title: "Server Components & Data Fetching",
    subtitle: "RSC, fetch, and caching",
    tags: ["Next.js", "React"],
    estimate: "4–5 hrs",
  },
  {
    num: 8,
    slug: "ch08-route-handlers",
    title: "Route Handlers & API Routes",
    subtitle: "Backend logic in Next.js",
    tags: ["Next.js", "TypeScript"],
    estimate: "3–4 hrs",
  },
  {
    num: 9,
    slug: "ch09-forms",
    title: "Forms, Validation & Server Actions",
    subtitle: "Handling user input the modern way",
    tags: ["Next.js", "React"],
    estimate: "3–4 hrs",
  },
  {
    num: 10,
    slug: "ch10-state",
    title: "State Management Patterns",
    subtitle: "Context, reducers & Zustand",
    tags: ["React", "TypeScript"],
    estimate: "3–4 hrs",
  },
  {
    num: 11,
    slug: "ch11-auth",
    title: "Authentication with NextAuth",
    subtitle: "Sessions, providers & protected routes",
    tags: ["Next.js"],
    estimate: "4–5 hrs",
  },
];

export function getChapter(slug: string): Chapter | undefined {
  return chapters.find((c) => c.slug === slug);
}
