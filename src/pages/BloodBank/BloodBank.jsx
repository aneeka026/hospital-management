import { Droplets } from "lucide-react";

const bloodGroups = [
  ["A+", 124],
  ["A-", 42],
  ["B+", 86],
  ["B-", 31],
  ["O+", 192],
  ["O-", 54],
  ["AB+", 42],
  ["AB-", 18],
];

export default function BloodBank() {
  return (
    <div>

      <h2 className="text-2xl font-bold text-slate-800">
        Blood Bank
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Monitor blood group availability across hospitals.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {bloodGroups.map(([group, units]) => (

          <div
            key={group}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >

            <div className="flex items-center justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-500">
                <Droplets size={22} />
              </div>

              <span className="text-xl font-bold text-red-500">
                {group}
              </span>

            </div>

            <p className="mt-5 text-sm text-slate-400">
              Available Units
            </p>

            <h3 className="mt-1 text-3xl font-bold text-slate-800">
              {units}
            </h3>

          </div>

        ))}

      </div>

    </div>
  );
}