import DashboardLayout from "../../components/layout/DashboardLayout";

function Attendance() {
    return (
        <DashboardLayout>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="p-6 border-b">
                    <h2 className="text-xl font-semibold text-slate-700">
                        Attendance Record
                    </h2>
                </div>

                <table className="w-full text-sm">
                    <thead className="bg-indigo-50 text-indigo-700">
                        <tr>
                            <th className="p-4 text-left">Subject</th>
                            <th className="p-4 text-left">Classes Held</th>
                            <th className="p-4 text-left">Classes Attended</th>
                            <th className="p-4 text-left">Percentage</th>
                        </tr>
                    </thead>

                    <tbody className="text-gray-700">
                        <AttendanceRow subject="Mathematics" held="40" attended="34" percent="85%" />
                        <AttendanceRow subject="Physics" held="38" attended="30" percent="79%" />
                        <AttendanceRow subject="Computer Science" held="42" attended="39" percent="93%" />
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    );
}

function AttendanceRow({ subject, held, attended, percent }) {
    return (
        <tr className="border-t hover:bg-gray-50 transition">
            <td className="p-4">{subject}</td>
            <td className="p-4">{held}</td>
            <td className="p-4">{attended}</td>
            <td className="p-4 font-semibold text-indigo-600">{percent}</td>
        </tr>
    );
}

export default Attendance;