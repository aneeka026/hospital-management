import {
  Bell,
  Search,
  Menu,
} from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-5 backdrop-blur lg:px-8">


      <div className="flex items-center gap-4">

        <button className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden">
          <Menu size={22} />
        </button>

        <div>
          <h1 className="text-xl font-bold text-slate-800">
            Government Hospital Management Portal
          </h1>

          <p className="text-xs text-slate-400">
            Health Department Administration
          </p>
        </div>

      </div>



      <div className="flex items-center gap-3">


        <div className="hidden items-center gap-2 rounded-xl bg-slate-100 px-4 py-2.5 md:flex">

          <Search
            size={17}
            className="text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-40 bg-transparent text-sm outline-none placeholder:text-slate-400"
          />

        </div>



        <button className="relative rounded-xl p-2.5 transition hover:bg-slate-100">

          <Bell
            size={20}
            className="text-slate-500"
          />

          {/* <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" /> */}

        </button>


        <div className="flex items-center gap-3 border-l border-slate-200 pl-3 sm:pl-4">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
            AD
          </div>

          <div className="hidden sm:block">

            <p className="text-sm font-semibold text-slate-700">
              Admin
            </p>

            <p className="text-xs text-slate-400">
              Health Department
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}