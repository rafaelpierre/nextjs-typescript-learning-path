# Next.js + TypeScript Learning Path

A 12-chapter, project-driven curriculum for learning modern frontend development with **Next.js 16**, **React 19**, and **TypeScript 5**. Each chapter ships with a real, runnable project — not a toy. The capstone is a full-stack ChatGPT clone with streaming AI, auth, and Vercel deployment.

## Purpose

This repo is the working notebook of someone going through the curriculum hands-on. Every chapter has:

- A **README** covering concepts explained from first principles, with sequence/flow diagrams for the trickier mechanics.
- A **chapter project** that exercises the concepts end-to-end (e.g. a Typed Counter for Ch 1, a Live Search Widget for Ch 2).
- One **route per chapter** in the Next.js app, plus optional sub-routes per exercise.

The aim is depth over breadth: rather than skimming twelve technologies, build twelve things that each lock in one layer of the stack.

## Repository structure

```
nextjs-typescript-learning-path/
├── exercises/          # The Next.js app for chapters 1–11
│   ├── app/
│   │   ├── page.tsx                    # chapter index
│   │   ├── ch01-foundations/           # one folder per chapter
│   │   │   ├── README.md               # chapter content
│   │   │   ├── page.tsx                # chapter landing
│   │   │   └── typed-counter/          # one sub-route per exercise
│   │   ├── ch02-hooks/
│   │   ├── ...
│   │   └── ch11-auth/
│   ├── components/
│   │   └── chapter-shell.tsx           # shared chapter layout
│   ├── lib/
│   │   └── chapters.ts                 # chapter metadata
│   ├── hooks/                          # reusable custom hooks
│   └── README.md                       # exercises index + chapter table
└── capstone/           # Chapter 12 — ChatGPT clone (separate Next.js app)
```

The exercises and capstone live in **separate Next.js apps** by design: the capstone has its own auth, database, environment secrets, and Vercel deployment, and mixing it with practice exercises would make deploys awkward.

## Chapters

| # | Chapter | Project |
| - | ------- | ------- |
| 1 | React & TypeScript Foundations | Typed Counter app |
| 2 | React Hooks Deep Dive | Live Search Widget (debounce + abort) |
| 3 | Tailwind CSS Fundamentals | _todo_ |
| 4 | shadcn/ui — Component Library | _todo_ |
| 5 | Next.js App Router Basics | _todo_ |
| 6 | TypeScript Deep Dive | _todo_ |
| 7 | Server Components & Data Fetching | _todo_ |
| 8 | Route Handlers & API Routes | _todo_ |
| 9 | Forms, Validation & Server Actions | _todo_ |
| 10 | State Management Patterns | _todo_ |
| 11 | Authentication with NextAuth | _todo_ |
| 12 | **Capstone** — ChatGPT Clone | Full-stack streaming chat |

Each chapter's deep-dive content lives at `exercises/app/ch<NN>-<slug>/README.md`.

## Running the exercises

```bash
cd exercises
npm install
npm run dev
```

Open <http://localhost:3000>. The home page lists every chapter; click through to the chapter landing, then to individual exercises.

## Conventions

A few patterns worth knowing if you're reading along:

- **`page.tsx` is reserved by Next.js.** Each `page.tsx` is a thin route entrypoint. Reusable components live in sibling files (e.g. `typed-counter.tsx`) and are imported by the route.
- **One exercise per sub-route.** Inside a chapter, each exercise gets its own folder with a `page.tsx`, so the URL acts as a stable bookmark for the work.
- **`"use client"` when a file uses hooks.** Next.js renders Server Components by default; any file using `useState`/`useEffect`/refs etc. must declare itself a Client Component. We cover this properly in Chapter 7.
- **Custom hooks live at `exercises/hooks/`** and are imported via the `@/hooks/...` path alias. The pattern is introduced in Chapter 2.
- **Diagrams in chapter READMEs use Mermaid** so they render natively in GitHub, VS Code preview, and most modern markdown viewers.

## Stack

- **Next.js 16** (App Router, Server Components, Server Actions)
- **React 19**
- **TypeScript 5** (strict)
- **Tailwind CSS v4** + **shadcn/ui** (introduced in Chapters 3–4)
- **Zustand** for client state (Chapter 10)
- **NextAuth v5** for authentication (Chapter 11)
- **OpenAI SDK** for the capstone (Chapter 12)
- Deployed to **Vercel**

> **Heads up — modern Next.js.** This curriculum targets Next.js 16, which has breaking changes from earlier versions (including some that pre-date most online tutorials). If something disagrees with what you've seen in older Next.js material, check the docs bundled in `exercises/node_modules/next/dist/docs/` first — those are the source of truth for this version.

## License

Personal learning project — no license attached, public for transparency.
