import { Users, Plus } from "lucide-react";

export default function Patients() {
  return (
    <Page
      icon={Users}
      title="Patients"
      description="Manage patient records and healthcare information."
      button="Add Patient"
    />
  );
}

function Page({
  icon: Icon,
  title,
  description,
  button,
}) {
  return (
    <div>

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            {title}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {description}
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white">
          <Plus size={18} />
          {button}
        </button>

      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">

        <Icon
          size={50}
          className="mx-auto text-blue-500"
        />

        <h3 className="mt-4 text-lg font-bold text-slate-800">
          {title} Management
        </h3>

        <p className="mx-auto mt-2 max-w-lg text-sm text-slate-500">
          This section will contain detailed {title.toLowerCase()}
          information and management features.
        </p>

      </div>

    </div>
  );
}