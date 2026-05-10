import { ChapterShell } from "@/components/chapter-shell";
import { TypedCounter } from "@/app/ch01-foundations/components/TypedCounter";

export default function Page() {
  return (
      <ChapterShell slug="ch01-foundations">
        <div className="space-y-3">
          <TypedCounter label="Apples" step={1} />
          <TypedCounter label="Oranges" step={2} />
          <TypedCounter label="Boxes" step={5} />
        </div>
      </ChapterShell>
    );
}
