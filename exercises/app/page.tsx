import Link from "next/link";
import { chapters } from "@/lib/chapters";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <header className="mb-12">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
          Next.js · TypeScript · 12-Chapter Curriculum
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Hands-On Mastery
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Exercises for chapters 1–11. The capstone lives in its own folder.
        </p>
      </header>

      <ol className="space-y-2">
        {chapters.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/${c.slug}`}
              className="group flex items-center gap-4 rounded-lg border border-zinc-200 px-4 py-3 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
            >
              <span className="font-mono text-sm tabular-nums text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300">
                {String(c.num).padStart(2, "0")}
              </span>
              <span className="flex-1">
                <span className="block font-medium text-zinc-950 dark:text-zinc-50">
                  {c.title}
                </span>
                <span className="block text-sm text-zinc-500">
                  {c.subtitle}
                </span>
              </span>
              <span className="hidden font-mono text-xs uppercase tracking-wider text-zinc-400 sm:block">
                {c.estimate}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
