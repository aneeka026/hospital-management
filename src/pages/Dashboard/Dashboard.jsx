import { Hospital, Users, Stethoscope, CalendarDays, Bed, Pill, Droplets, Activity, ArrowUpRight, ArrowDownRight, MoreHorizontal, Clock3 } from "lucide-react";

export default function Dashboard() {
    const stats = [
        {
            title: "Total Hospitals",
            value: "24",
            change: "+8.2%",
            positive: true,
            icon: Hospital,
            iconBg: "bg-blue-50",
            iconColor: "text-blue-600",
        },
        {
            title: "Total Doctors",
            value: "386",
            change: "+5.4%",
            positive: true,
            icon: Stethoscope,
            iconBg: "bg-indigo-50",
            iconColor: "text-indigo-600",
        },
        {
            title: "Total Patients",
            value: "12,903",
            change: "+12.6%",
            positive: true,
            icon: Users,
            iconBg: "bg-cyan-50",
            iconColor: "text-cyan-600",
        },
        {
            title: "Appointments",
            value: "1,248",
            change: "-2.4%",
            positive: false,
            icon: CalendarDays,
            iconBg: "bg-orange-50",
            iconColor: "text-orange-500",
        },
    ];

    const hospitalData = [
        {
            name: "District Hospital Delhi",
            location: "New Delhi",
            patients: 3240,
            doctors: 82,
            beds: "420 / 500",
            status: "Active",
        },
        {
            name: "Civil Hospital Jaipur",
            location: "Jaipur",
            patients: 2860,
            doctors: 65,
            beds: "350 / 420",
            status: "Active",
        },
        {
            name: "Government Hospital Pune",
            location: "Pune",
            patients: 2418,
            doctors: 54,
            beds: "280 / 350",
            status: "Active",
        },
        {
            name: "District Hospital Lucknow",
            location: "Lucknow",
            patients: 1987,
            doctors: 71,
            beds: "390 / 450",
            status: "Active",
        },
        {
            name: "Civil Hospital Bhopal",
            location: "Bhopal",
            patients: 1720,
            doctors: 48,
            beds: "260 / 320",
            status: "Active",
        },
    ];

    const appointments = [
        {
            patient: "Rahul Sharma",
            doctor: "Dr. Ankit Verma",
            department: "Cardiology",
            time: "09:30 AM",
            status: "Confirmed",
        },
        {
            patient: "Priya Singh",
            doctor: "Dr. Neha Gupta",
            department: "Neurology",
            time: "10:15 AM",
            status: "Confirmed",
        },
        {
            patient: "Amit Kumar",
            doctor: "Dr. Raj Mehta",
            department: "Orthopedics",
            time: "11:00 AM",
            status: "Pending",
        },
        {
            patient: "Sneha Patel",
            doctor: "Dr. Pooja Shah",
            department: "Dermatology",
            time: "12:30 PM",
            status: "Confirmed",
        },
    ];

    const bloodGroups = [
        { group: "A+", units: 124 },
        { group: "A-", units: 42 },
        { group: "B+", units: 86 },
        { group: "B-", units: 31 },
        { group: "O+", units: 192 },
        { group: "O-", units: 54 },
        { group: "AB+", units: 42 },
        { group: "AB-", units: 18 },
    ];

    return (
        <div className="space-y-6">

            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

                <div>
                    <h2 className="text-2xl font-bold text-slate-800">Dashboard</h2>
                    <p className="mt-1 text-sm text-slate-500"> Overview of government hospital healthcare services.</p>
                </div>

                <button className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition hover:border-blue-200 hover:text-blue-600">  Today ▾</button>

            </div>


            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

                {stats.map((stat) => {

                    const Icon = stat.icon;

                    return (
                        <div
                            key={stat.title}
                            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >

                            <div className="flex items-start justify-between">

                                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.iconBg}`} >
                                    <Icon size={23} className={stat.iconColor} />
                                </div>

                                <button className="text-slate-300 hover:text-slate-500">
                                    <MoreHorizontal size={20} />
                                </button>

                            </div>

                            <p className="mt-5 text-sm text-slate-500">{stat.title}</p>

                            <div className="mt-1 flex items-end justify-between">

                                <h3 className="text-2xl font-bold text-slate-800"> {stat.value} </h3>

                                <span
                                    className={`flex items-center gap-1 text-xs font-semibold ${stat.positive
                                        ? "text-emerald-500"
                                        : "text-red-500"
                                        }`}
                                >
                                    {stat.positive ? (
                                        <ArrowUpRight size={14} />
                                    ) : (
                                        <ArrowDownRight size={14} />
                                    )}

                                    {stat.change}
                                </span>

                            </div>

                            <p className="mt-1 text-xs text-slate-400"> Compared with last month </p>

                        </div>
                    );
                })}

            </div>


            <div className="grid gap-6 xl:grid-cols-3">

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">

                    <div className="flex items-center justify-between">

                        <div>
                            <h3 className="font-bold text-slate-800">Patient Overview</h3>
                            <p className="mt-1 text-xs text-slate-400">Patient admissions across hospitals</p>
                        </div>

                        <select className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-500 outline-none">
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                            <option>Last 6 Months</option>
                        </select>

                    </div>

                    <div className="mt-6">

                        <div className="flex h-64 items-end gap-3 sm:gap-5">

                            {[
                                { day: "Mon", value: 48, admitted: 35 },
                                { day: "Tue", value: 64, admitted: 44 },
                                { day: "Wed", value: 52, admitted: 38 },
                                { day: "Thu", value: 78, admitted: 56 },
                                { day: "Fri", value: 68, admitted: 49 },
                                { day: "Sat", value: 88, admitted: 64 },
                                { day: "Sun", value: 74, admitted: 53 },
                            ].map((item) => (

                                <div key={item.day} className="flex h-full flex-1 flex-col items-center justify-end" >
                                    <div className="relative flex h-52 w-full items-end justify-center gap-1">

                                        <div
                                            className="w-2/5 rounded-t-md bg-blue-500 transition hover:bg-blue-600"
                                            style={{
                                                height: `${item.value}%`,
                                            }}
                                        />

                                        <div
                                            className="w-2/5 rounded-t-md bg-cyan-300 transition hover:bg-cyan-400"
                                            style={{
                                                height: `${item.admitted}%`,
                                            }}
                                        />

                                    </div>

                                    <span className="mt-3 text-xs text-slate-400">{item.day}</span>
                                </div>

                            ))}

                        </div>


                        <div className="mt-5 flex items-center gap-5 border-t border-slate-100 pt-4">

                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                                Total Patients
                            </div>

                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                                Admissions
                            </div>

                        </div>

                    </div>

                </div>


                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="font-bold text-slate-800"> Bed Availability </h3>
                            <p className="mt-1 text-xs text-slate-400"> Current hospital capacity</p>
                        </div>

                        <Bed size={22} className="text-blue-500" />
                    </div>

                    <div className="mt-7 flex items-center justify-center">
                        <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-16p border-blue-100">
                            <div className="absolute -inset-4 rounded-full border-16 border-transparent border-t-blue-500 border-r-blue-500" />
                            <div className="text-center">
                                <p className="text-3xl font-bold text-slate-800">   78%</p>
                                <p className="text-xs text-slate-400">   Occupied </p>
                            </div>
                        </div>
                    </div>


                    <div className="mt-7 grid grid-cols-2 gap-3">

                        <div className="rounded-xl bg-blue-50 p-3">
                            <p className="text-xs text-slate-500"> Total Beds</p>
                            <p className="mt-1 text-lg font-bold text-slate-800"> 2,840 </p>
                        </div>

                        <div className="rounded-xl bg-emerald-50 p-3">
                            <p className="text-xs text-slate-500"> Available </p>
                            <p className="mt-1 text-lg font-bold text-emerald-600">  624 </p>
                        </div>

                    </div>

                </div>

            </div>


            <div className="grid gap-6 xl:grid-cols-3">

                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm xl:col-span-2">

                    <div className="flex items-center justify-between border-b border-slate-100 p-6">

                        <div>
                            <h3 className="font-bold text-slate-800">
                                Hospital Overview
                            </h3>

                            <p className="mt-1 text-xs text-slate-400">
                                Performance of major government hospitals
                            </p>
                        </div>

                        <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">
                            View All
                        </button>

                    </div>


                    <div className="overflow-x-auto">

                        <table className="w-full min-w-175">

                            <thead>
                                <tr className="border-b border-slate-100 text-left text-xs uppercase tracking-wide text-slate-400">
                                    <th className="px-6 py-4">Hospital</th>
                                    <th className="px-4 py-4">Patients</th>
                                    <th className="px-4 py-4">Doctors</th>
                                    <th className="px-4 py-4">Beds</th>
                                    <th className="px-4 py-4">Status</th>
                                </tr>
                            </thead>

                            <tbody>

                                {hospitalData.map((hospital) => (

                                    <tr
                                        key={hospital.name}
                                        className="border-b border-slate-50 transition hover:bg-slate-50"
                                    >

                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                                    <Hospital size={19} />
                                                </div>

                                                <div>
                                                    <p className="text-sm font-semibold text-slate-700">   {hospital.name} </p>
                                                    <p className="text-xs text-slate-400">  {hospital.location} </p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-4 py-4 text-sm font-medium text-slate-600">{hospital.patients.toLocaleString()} </td>
                                        <td className="px-4 py-4 text-sm text-slate-500">{hospital.doctors} </td>
                                        <td className="px-4 py-4 text-sm text-slate-500">{hospital.beds} </td>
                                        <td className="px-4 py-4">
                                            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                                                {hospital.status}
                                            </span>
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>


                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                    <div className="flex items-center justify-between">

                        <div>
                            <h3 className="font-bold text-slate-800">   Blood Bank </h3>

                            <p className="mt-1 text-xs text-slate-400">
                                Available blood units
                            </p>
                        </div>

                        <Droplets
                            size={22}
                            className="text-red-500"
                        />

                    </div>


                    <div className="mt-6 space-y-4">

                        {bloodGroups.map((blood) => (

                            <div
                                key={blood.group}
                                className="flex items-center gap-3"
                            >

                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-xs font-bold text-red-500">
                                    {blood.group}
                                </div>

                                <div className="flex-1">

                                    <div className="mb-1 flex justify-between">

                                        <span className="text-xs text-slate-500">
                                            Available
                                        </span>

                                        <span className="text-xs font-semibold text-slate-700">
                                            {blood.units} units
                                        </span>

                                    </div>

                                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">

                                        <div
                                            className="h-full rounded-full bg-red-400"
                                            style={{
                                                width: `${Math.min(
                                                    (blood.units / 200) * 100,
                                                    100
                                                )}%`,
                                            }}
                                        />

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>


                    <button className="mt-6 w-full rounded-xl border border-slate-200 py-2.5 text-xs font-semibold text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500">
                        View Blood Bank
                    </button>

                </div>

            </div>



            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

                <div className="flex items-center justify-between border-b border-slate-100 p-6">

                    <div>
                        <h3 className="font-bold text-slate-800">
                            Today's Appointments
                        </h3>

                        <p className="mt-1 text-xs text-slate-400">
                            Upcoming patient appointments
                        </p>
                    </div>

                    <button className="text-xs font-semibold text-blue-600">
                        View Schedule
                    </button>

                </div>


                <div className="grid gap-4 p-5 lg:grid-cols-2 xl:grid-cols-4">

                    {appointments.map((appointment) => (

                        <div
                            key={`${appointment.patient}-${appointment.time}`}
                            className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition hover:border-blue-100 hover:bg-blue-50/30"
                        >

                            <div className="flex items-center justify-between">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                                        {appointment.patient
                                            .split(" ")
                                            .map((word) => word[0])
                                            .join("")}
                                    </div>

                                    <div>

                                        <p className="text-sm font-semibold text-slate-700">
                                            {appointment.patient}
                                        </p>

                                        <p className="text-xs text-slate-400">
                                            {appointment.department}
                                        </p>

                                    </div>

                                </div>

                                <Clock3
                                    size={16}
                                    className="text-slate-400"
                                />

                            </div>


                            <div className="mt-4 border-t border-slate-100 pt-3">

                                <div className="flex justify-between">

                                    <span className="text-xs text-slate-400">
                                        Doctor
                                    </span>

                                    <span className="text-xs font-medium text-slate-600">
                                        {appointment.doctor}
                                    </span>

                                </div>

                                <div className="mt-2 flex justify-between">

                                    <span className="text-xs text-slate-400">
                                        Time
                                    </span>

                                    <span className="text-xs font-semibold text-blue-600">
                                        {appointment.time}
                                    </span>

                                </div>

                            </div>


                            <div className="mt-3">

                                <span
                                    className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${appointment.status === "Confirmed"
                                        ? "bg-emerald-50 text-emerald-600"
                                        : "bg-orange-50 text-orange-500"
                                        }`}
                                >
                                    {appointment.status}
                                </span>

                            </div>

                        </div>

                    ))}

                </div>

            </div>



            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

                <SummaryCard
                    icon={Activity}
                    title="Emergency Cases"
                    value="86"
                    subtitle="Today"
                    iconClass="bg-red-50 text-red-500"
                />

                <SummaryCard
                    icon={Pill}
                    title="Low Stock Medicines"
                    value="18"
                    subtitle="Needs attention"
                    iconClass="bg-orange-50 text-orange-500"
                />

                <SummaryCard
                    icon={Bed}
                    title="ICU Beds Available"
                    value="24"
                    subtitle="Across all hospitals"
                    iconClass="bg-purple-50 text-purple-500"
                />

                <SummaryCard
                    icon={Users}
                    title="New Patients"
                    value="342"
                    subtitle="This week"
                    iconClass="bg-cyan-50 text-cyan-500"
                />

            </div>

        </div>
    );
}


function SummaryCard({
    icon: Icon,
    title,
    value,
    subtitle,
    iconClass,
}) {
    return (
        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconClass}`}
            >
                <Icon size={21} />
            </div>

            <div>

                <p className="text-xs text-slate-400">
                    {title}
                </p>

                <div className="flex items-baseline gap-2">

                    <h3 className="text-xl font-bold text-slate-800">
                        {value}
                    </h3>

                    <span className="text-[10px] text-slate-400">
                        {subtitle}
                    </span>

                </div>

            </div>

        </div>
    );
}