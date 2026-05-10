import { LiveSearch } from "./components/LiveSearch";
import { ChapterShell } from "@/components/chapter-shell";

export default function Page() {
  return (
      <ChapterShell slug="ch02-hooks">
        <div>
            <LiveSearch />
        </div>
      </ChapterShell>
    );
}
