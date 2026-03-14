"use client";

import { useState } from "react";
import type { Accomplishment, Discipline } from "../accomplishmentData";

const disciplines: Discipline[] = ["Bouldering", "Sport Climbing", "Trad Climbing"];

export default function AccomplishmentsTable({
  accomplishments,
}: {
  accomplishments: Accomplishment[];
}) {
  const [selected, setSelected] = useState<Discipline>("Bouldering");

  const filtered = accomplishments.filter((a) => a.discipline === selected);

  return (
    <div>
      <div className="mb-8">
        <label
          htmlFor="discipline"
          className="mr-3 text-sm font-semibold uppercase tracking-wider text-stone-500"
        >
          Discipline
        </label>
        <select
          id="discipline"
          value={selected}
          onChange={(e) => setSelected(e.target.value as Discipline)}
          className="rounded-lg border border-stone-700 bg-stone-900 px-4 py-2 text-sm text-white transition-colors focus:border-amber-500 focus:outline-none"
        >
          {disciplines.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-stone-700 text-left text-xs font-semibold uppercase tracking-wider text-stone-500">
              <th className="px-4 py-3">Climber</th>
              <th className="px-4 py-3">Route</th>
              <th className="px-4 py-3">Grade</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Year</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-8 text-center text-sm text-stone-500"
                >
                  No entries for this discipline.
                </td>
              </tr>
            ) : (
              filtered.map((a) => (
                <tr
                  key={a.climberName}
                  className="border-b border-stone-800/50 transition-colors hover:bg-stone-800/30"
                >
                  <td className="px-4 py-3 text-sm font-medium text-white">
                    {a.climberName}
                  </td>
                  <td className="px-4 py-3 text-sm text-stone-300">
                    {a.route}
                  </td>
                  <td className="px-4 py-3 text-sm font-medium text-amber-400">
                    {a.grade}
                  </td>
                  <td className="px-4 py-3 text-sm text-stone-300">
                    {a.crag}
                  </td>
                  <td className="px-4 py-3 text-sm text-stone-300">
                    {a.year}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
