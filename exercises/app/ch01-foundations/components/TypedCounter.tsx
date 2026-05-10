"use client";

import { useState } from "react";

interface TypedCounterProps {
  label: string,
  step?: number
}

export function TypedCounter({ label, step = 1 }: TypedCounterProps) {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((previousCount) => {
      console.log("incrementing ", step)
      return previousCount + step
    });
  };

  return <div className="flex items-center gap-4 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
        {label}
    </p>
    <p className="text-2xl font-semibold tabular-nums text-zinc-950 dark:text-zinc-50">
        {count}
    </p>
    <button onClick={increment} className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300">
        +{step}
    </button>
  </div>

};