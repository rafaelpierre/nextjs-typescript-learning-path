# Exercises

Hands-on exercises for the 12-chapter Next.js + TypeScript learning path. The capstone (Chapter 12) lives in a separate folder.

## Run

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>. The home page lists every chapter; each chapter has its own route under `app/chNN-slug/`.

## Structure

```
exercises/
  app/
    page.tsx                      # chapter index
    ch01-foundations/
      README.md                   # concepts + chapter project for this chapter
      page.tsx                    # chapter landing — add sub-routes for each exercise
    ch02-hooks/
    ...
  components/chapter-shell.tsx    # shared header used by every chapter page
  lib/chapters.ts                 # chapter metadata (titles, tags, estimates)
```

To add an exercise inside a chapter, create a sub-route — e.g. `app/ch02-hooks/use-state/page.tsx`.

## Chapters

| # | Chapter | Notes |
| - | ------- | ----- |
| 1 | React & TypeScript Foundations | [README](./app/ch01-foundations/README.md) |
| 2 | React Hooks — Deep Dive | [README](./app/ch02-hooks/README.md) |
| 3 | Tailwind CSS Fundamentals | _todo_ |
| 4 | shadcn/ui — Component Library | _todo_ |
| 5 | Next.js App Router Basics | _todo_ |
| 6 | TypeScript Deep Dive | _todo_ |
| 7 | Server Components & Data Fetching | _todo_ |
| 8 | Route Handlers & API Routes | _todo_ |
| 9 | Forms, Validation & Server Actions | _todo_ |
| 10 | State Management Patterns | _todo_ |
| 11 | Authentication with NextAuth | _todo_ |
| 12 | Capstone — ChatGPT Clone | separate folder |
