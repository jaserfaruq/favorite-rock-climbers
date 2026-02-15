import { climbers } from "./climberData";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-950 text-white">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-stone-800">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">
            A Personal Collection
          </p>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            My Favorite Rock Climbers
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-stone-400">
            The athletes who inspire me to try harder, reach higher, and never
            let go.
          </p>
        </div>
      </header>

      {/* Gallery Grid */}
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {climbers.map((climber) => (
            <article
              key={climber.name}
              className="group overflow-hidden rounded-2xl border border-stone-800 bg-stone-900 transition-all duration-300 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={climber.imageUrl}
                  alt={climber.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-amber-500/90 px-3 py-1 text-xs font-semibold text-stone-950">
                    {climber.specialty}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold">{climber.name}</h2>
                <p className="mt-1 text-sm font-medium text-amber-400">
                  &ldquo;{climber.nickname}&rdquo;
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone-400">
                  {climber.bio}
                </p>
                <div className="mt-4 border-t border-stone-800 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Notable Ascent
                  </p>
                  <p className="mt-1 text-sm font-medium text-stone-300">
                    {climber.notableAscent}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-800 py-8 text-center text-sm text-stone-500">
        Built with love for the sport of climbing
      </footer>
    </div>
  );
}
