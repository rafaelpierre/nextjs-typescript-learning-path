"use client";
import { useEffect, useState } from "react";

// Debouce hook
// Delays "publishing" a fast-changing value (the search query)
// until it has stopped changing for a given window of time.
// Function declaration uses generic types for the value

export function useDebounce<T>(value: T, delayMs: number): T {
  // Keeps the value in state
  const [debounced, setDebounced] = useState(value);

  // "setTimeout" and "clearTimeout" are Web APIs - React dont know
  // they exist, doesnt manage them, and wont clean them up for you.
  // The effect is the bridge.

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(id);
  }, [value, delayMs]);

  return debounced;
}