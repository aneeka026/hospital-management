import { Bell, Plus } from "lucide-react";

export default function Notices() {
  const notices = [
    {
      title: "National Health Camp",
      date: "14 Aug 2026",
      type: "Health Program",
    },
    {
      title: "Blood Donation Drive",
      date: "18 Aug 2026",
      type: "Blood Bank",
    },
    {
      title: "Hospital Staff Meeting",
      date: "20 Aug 2026",
      type: "Administration",
    },
  ];

  return (
    <div>

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Notices
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Government health department announcements and notices.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white">
          <Plus size={18} />
          Create Notice
        </button>

      </div>


      <div className="mt-6 space-y-4">

        {notices.map((notice) => (

          <div
            key={notice.title}
            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Bell size={22} />
            </div>

            <div className="flex-1">

              <h3 className="font-semibold text-slate-800">
                {notice.title}
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                {notice.type}
              </p>

            </div>

            <span className="text-xs text-slate-400">
              {notice.date}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}