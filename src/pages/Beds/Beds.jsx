import { Bed } from "lucide-react";

export default function Beds() {
  const beds = [
    ["General Ward", 342, 420],
    ["ICU", 64, 100],
    ["Emergency", 38, 100],
    ["Pediatric", 72, 90],
    ["Maternity", 48, 70],
  ];

  return (
    <div>

      <h2 className="text-2xl font-bold text-slate-800">
        Bed Management
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Monitor hospital bed availability and occupancy.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

        {beds.map(([name, available, total]) => {

          const percentage = Math.round(
            (available / total) * 100
          );

          return (
            <div
              key={name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                    <Bed size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-700">
                      {name}
                    </h3>

                    <p className="text-xs text-slate-400">
                      Bed availability
                    </p>
                  </div>

                </div>

                <span className="text-lg font-bold text-blue-600">
                  {available}
                </span>

              </div>

              <div className="mt-5 h-2 rounded-full bg-slate-100">

                <div
                  className="h-full rounded-full bg-blue-500"
                  style={{
                    width: `${percentage}%`,
                  }}
                />

              </div>

              <div className="mt-2 flex justify-between text-xs text-slate-400">

                <span>
                  {available} available
                </span>

                <span>
                  {total} total
                </span>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}