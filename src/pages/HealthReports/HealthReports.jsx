import { FileBarChart } from "lucide-react";

export default function HealthReports() {
  return (
    <div>

      <h2 className="text-2xl font-bold text-slate-800">
        Health Reports
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Hospital performance and healthcare reports.
      </p>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">

        <FileBarChart
          size={55}
          className="mx-auto text-blue-500"
        />

        <h3 className="mt-4 text-lg font-bold text-slate-800">
          Health Analytics
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Hospital statistics, patient reports and healthcare
          analytics will appear here.
        </p>

      </div>

    </div>
  );
}