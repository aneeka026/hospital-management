import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-50">

      <Sidebar />

      <main className="lg:ml-64">

        <Header />

        <div className="p-5 lg:p-8">
          <Outlet />
        </div>

      </main>

    </div>
  );
}