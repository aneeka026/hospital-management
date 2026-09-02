import {
  Hospital,
  Plus,
  Search,
} from "lucide-react";

export default function Hospitals() {
  return (
    <div>

      <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Hospitals
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Manage government hospitals and healthcare facilities.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 hover:bg-blue-700">
          <Plus size={18} />
          Add Hospital
        </button>

      </div>


      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <Hospital className="text-blue-600" size={25} />

          <p className="mt-4 text-sm text-slate-500">
            Total Hospitals
          </p>

          <h3 className="mt-1 text-3xl font-bold text-slate-800">
            24
          </h3>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <p className="text-sm text-slate-500">
            Government Hospitals
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-800">
            18
          </h3>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <p className="text-sm text-slate-500">
            District Hospitals
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-800">
            12
          </h3>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <p className="text-sm text-slate-500">
            Active Facilities
          </p>

          <h3 className="mt-2 text-3xl font-bold text-emerald-600">
            22
          </h3>

        </div>

      </div>


      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="mb-5 flex items-center justify-between">

          <h3 className="font-bold text-slate-800">
            Hospital Directory
          </h3>

          <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2">

            <Search
              size={17}
              className="text-slate-400"
            />

            <input
              placeholder="Search hospitals..."
              className="bg-transparent text-sm outline-none"
            />

          </div>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full min-w-175 text-left">

            <thead>

              <tr className="border-b border-slate-100 text-xs text-slate-400">

                <th className="pb-4">
                  Hospital
                </th>

                <th className="pb-4">
                  District
                </th>

                <th className="pb-4">
                  Beds
                </th>

                <th className="pb-4">
                  Doctors
                </th>

                <th className="pb-4">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {[
                ["District Hospital Delhi", "New Delhi", 420, 82],
                ["Civil Hospital Jaipur", "Jaipur", 350, 65],
                ["Government Hospital Pune", "Pune", 280, 54],
                ["District Hospital Lucknow", "Lucknow", 390, 71],
              ].map((hospital) => (

                <tr
                  key={hospital[0]}
                  className="border-b border-slate-50 hover:bg-slate-50"
                >

                  <td className="py-4 text-sm font-semibold text-slate-700">
                    {hospital[0]}
                  </td>

                  <td className="py-4 text-sm text-slate-500">
                    {hospital[1]}
                  </td>

                  <td className="py-4 text-sm text-slate-500">
                    {hospital[2]}
                  </td>

                  <td className="py-4 text-sm text-slate-500">
                    {hospital[3]}
                  </td>

                  <td className="py-4">

                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
                      Active
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}