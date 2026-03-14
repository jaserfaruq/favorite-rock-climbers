import { accomplishments } from "../accomplishmentData";
import AccomplishmentsTable from "./AccomplishmentsTable";

export default function AccomplishmentsPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-white">
      <header className="border-b border-stone-800">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">
            Performance Tracker
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Highest Accomplishments
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-stone-400">
            The hardest sends from each climber, filtered by discipline.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16">
        <AccomplishmentsTable accomplishments={accomplishments} />
      </main>

      <footer className="border-t border-stone-800 py-8 text-center text-sm text-stone-500">
        Built with love for the sport of climbing
      </footer>
    </div>
  );
}
