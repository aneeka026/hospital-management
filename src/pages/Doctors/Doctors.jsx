import { Stethoscope, Plus } from "lucide-react";

export default function Doctors() {
  return (
    <div>

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Doctors
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Manage doctors and medical staff.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white">
          <Plus size={18} />
          Add Doctor
        </button>

      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

        <Stat
          title="Total Doctors"
          value="386"
        />

        <Stat
          title="Available Today"
          value="274"
        />

        <Stat
          title="On Leave"
          value="32"
        />

        <Stat
          title="Specialists"
          value="184"
        />

      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">

        <Stethoscope
          size={45}
          className="mx-auto text-blue-500"
        />

        <h3 className="mt-4 text-lg font-bold text-slate-800">
          Doctor Management
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Doctor directory, schedules and department assignments
          will appear here.
        </p>

      </div>

    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-bold text-slate-800">
        {value}
      </h3>

    </div>
  );
}