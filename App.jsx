import {BrowserRouter, Routes, Route} from "react-router-dom";

import AdminLayout from "./components/layout/AdminLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Hospitals from "./pages/Hospitals/Hospitals";
import Doctors from "./pages/Doctors/Doctors";
import Patients from "./pages/Patients/Patients";
import Appointments from "./pages/Appointments/Appointments";
import Beds from "./pages/Beds/Beds";
import Medicines from "./pages/Medicines/Medicines";
import BloodBank from "./pages/BloodBank/BloodBank";
import HealthReports from "./pages/HealthReports/HealthReports";
import Notices from "./pages/Notices/Notices";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route element={<AdminLayout />}>

          <Route path="/" element={<Dashboard />} />

          <Route path="/hospitals" element={<Hospitals />} />

          <Route path="/doctors" element={<Doctors />} />

          <Route path="/patients" element={<Patients />} />

          <Route path="/appointments" element={<Appointments />} />

          <Route path="/beds" element={<Beds />} />

          <Route path="/medicines" element={<Medicines />} />

          <Route path="/blood-bank" element={<BloodBank />} />

          <Route path="/health-reports" element={<HealthReports />} />

          <Route path="/notices" element={<Notices />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;