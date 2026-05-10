import Link from "next/link";
import { notFound } from "next/navigation";
import { getChapter } from "@/lib/chapters";

type Props = {
  slug: string;
  children?: React.ReactNode;
};

export function ChapterShell({ slug, children }: Props) {
  const chapter = getChapter(slug);
  if (!chapter) notFound();

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <Link
        href="/"
        className="font-mono text-xs uppercase tracking-widest text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← All chapters
      </Link>
      <header className="mt-6 border-b border-zinc-200 pb-8 dark:border-zinc-800">
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
          Chapter {String(chapter.num).padStart(2, "0")} · {chapter.estimate}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          {chapter.title}
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          {chapter.subtitle}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {chapter.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-zinc-200 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
            >
              {t}
            </li>
          ))}
        </ul>
      </header>

      <section className="mt-10">
        {children ?? (
          <p className="text-zinc-500">
            Exercises go here. Add sub-routes under{" "}
            <code className="font-mono text-zinc-700 dark:text-zinc-300">
              app/{chapter.slug}/
            </code>
            , one folder per exercise.
          </p>
        )}
      </section>
    </main>
  );
}
