import {
  LayoutDashboard,
  Hospital,
  Stethoscope,
  Users,
  CalendarDays,
  Bed,
  Pill,
  Droplets,
  FileBarChart,
  Bell,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Hospitals",
    path: "/hospitals",
    icon: Hospital,
  },
  {
    name: "Doctors",
    path: "/doctors",
    icon: Stethoscope,
  },
  {
    name: "Patients",
    path: "/patients",
    icon: Users,
  },
  {
    name: "Appointments",
    path: "/appointments",
    icon: CalendarDays,
  },
  {
    name: "Beds",
    path: "/beds",
    icon: Bed,
  },
  {
    name: "Medicines",
    path: "/medicines",
    icon: Pill,
  },
  {
    name: "Blood Bank",
    path: "/blood-bank",
    icon: Droplets,
  },
  {
    name: "Health Reports",
    path: "/health-reports",
    icon: FileBarChart,
  },
  {
    name: "Notices",
    path: "/notices",
    icon: Bell,
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-30 hidden h-screen w-64 flex-col border-r border-slate-200 bg-white lg:flex">


      <div className="flex h-20 shrink-0 items-center gap-3 border-b border-slate-100 px-6">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200">
          <Hospital size={25} />
        </div>

        <div>
          <h1 className="text-sm font-bold text-slate-800"> GovHealth</h1>
          <p className="text-xs text-slate-400"> Management Portal</p>
        </div>

      </div>


      <div className="flex min-h-0 flex-1 flex-col px-4 py-5">

        <p className="mb-3 shrink-0 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">   Main Menu </p>


        <nav className="min-h-0 flex-1 space-y-0 pr-1">
  {/* // overflow-y-auto = for scroll */}
          {menuItems.map((item) => {

            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                      : "text-slate-500 hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      size={19}
                      className={
                        isActive
                          ? "text-white"
                          : "text-slate-400 group-hover:text-blue-600"
                      }
                    />

                    <span>
                      {item.name}
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}

        </nav>


        <div className="mt-3 shrink-0 border-t border-gray-200 pt-3">
          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-blue-600">
            <Settings size={19} /> Settings</button>
        </div>


        {/* <div className="mt-3 shrink-0 overflow-hidden rounded-2xl bg-linear-to-br from-blue-600 to-cyan-500 p-4 text-white">

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20">
            <Hospital size={20} />
          </div>

          <p className="mt-3 text-sm font-semibold">
            Government Health Services
          </p>

          <p className="mt-1 text-xs leading-4 text-blue-100">
            Digital healthcare management for public hospitals.
          </p>

          <button className="mt-3 rounded-lg bg-white/20 px-3 py-1.5 text-xs font-medium backdrop-blur transition hover:bg-white/30">
            Hospital Profile
          </button>

        </div> */}

      </div>

    </aside>
  );
}