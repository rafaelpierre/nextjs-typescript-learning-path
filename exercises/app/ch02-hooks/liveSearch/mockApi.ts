// app/ch02-hooks/live-search/mock-api.ts
const SAMPLE_SENTENCES = [
  "React is a JavaScript library for building user interfaces.",
  "Hooks let you use state without writing a class.",
  "useEffect lets you synchronise with external systems.",
  "TypeScript adds static types to JavaScript.",
  "Next.js is a React framework for production.",
  "Tailwind CSS is a utility-first CSS framework.",
  "Server Components run on the server only.",
  "Custom hooks compose existing hooks into reusable logic.",
  "useDebounce delays publishing a fast-changing value.",
  "AbortController cancels in-flight fetch requests.",
];

export function mockSearch(
  query: string,
  options?: { signal?: AbortSignal; delayMs?: number },
): Promise<string[]> {
  const { signal, delayMs = 600 } = options ?? {};

  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      return reject(new DOMException("Aborted", "AbortError"));
    }

    const timer = setTimeout(() => {
      const q = query.toLowerCase();
      const matches = SAMPLE_SENTENCES.filter((s) => s.toLowerCase().includes(q));
      resolve(matches);
    }, delayMs);

    signal?.addEventListener("abort", () => {
      clearTimeout(timer);
      reject(new DOMException("Aborted", "AbortError"));
    });
  });
}