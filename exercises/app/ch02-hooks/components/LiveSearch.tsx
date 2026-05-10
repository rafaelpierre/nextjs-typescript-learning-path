"use client";

import { useState, useEffect } from "react";
import { useDebounce } from "../hooks/debounce";
import { mockSearch } from "../liveSearch/mockApi";


export function LiveSearch() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<string[]>([]);
    const debouncedQuery = useDebounce(query, 300);

    // Need to sync a non-react event/component (e.g. search API)
    // with React

    useEffect(() => {
        if (!debouncedQuery) {
            //User stopped typing, clear previous results
            setResults([]);
            return;
        }
        const control = new AbortController();
        mockSearch(debouncedQuery, { signal: control.signal })
            .then(setResults)
            .catch((err) => {
                if (err.name !== "AbortError") console.error(err);
            });
        return () => control.abort();
    }, [debouncedQuery]);

    return (
        <div className="space-y-4">
        <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search…"
            className="w-full rounded-md borderborder-zinc-300 bg-whitepx-3 py-2 text-sm outline-none focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900"
        />
        {results.length > 0 && (
            <ul className="space-y-1 rounded-md border border-zinc-200 bg-white p-2 text-sm dark:border-zinc-800 dark:bg-zinc-900">
                {results.map((r) => (<li key={r} className="rounded px-2 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800">{r}</li>))}
            </ul>
        )}
        {debouncedQuery && results.length === 0 && (
            <p className="text-sm text-zinc-500">No results for "{debouncedQuery}".</p>
        )}
    </div>
  );
}