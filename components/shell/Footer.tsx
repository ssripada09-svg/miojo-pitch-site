import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="border-t hairline bg-cream-50">
      <div className="mx-auto flex max-w-shell flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-10">
        <Wordmark />
        <div className="flex flex-col gap-2 text-right md:flex-row md:items-center md:gap-8">
          <span className="font-mono text-[0.68rem] uppercase tracking-eyebrow text-forest-400">
            Investor preview · 2026
          </span>
          <span className="font-mono text-[0.68rem] uppercase tracking-eyebrow text-forest-400">
            Cayman · Brooklyn · Lisbon
          </span>
        </div>
      </div>
    </footer>
  );
}
