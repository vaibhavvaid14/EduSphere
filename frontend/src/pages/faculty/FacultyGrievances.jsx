import DashboardLayout from "../../components/layout/DashboardLayout";

function FacultyGrievances() {
    return (
        <DashboardLayout>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="p-6 border-b">
                    <h2 className="text-xl font-semibold text-slate-700">
                        Student Grievances
                    </h2>
                </div>

                <table className="w-full text-sm">
                    <thead className="bg-indigo-50 text-indigo-700">
                        <tr>
                            <th className="p-4 text-left">Student</th>
                            <th className="p-4 text-left">Issue</th>
                            <th className="p-4 text-left">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="border-t hover:bg-gray-50 transition">
                            <td className="p-4">Adeel Khan</td>
                            <td className="p-4">Marks not updated</td>
                            <td className="p-4 text-orange-600 font-semibold">Pending</td>
                        </tr>

                        <tr className="border-t hover:bg-gray-50 transition">
                            <td className="p-4">Sara Ali</td>
                            <td className="p-4">Attendance discrepancy</td>
                            <td className="p-4 text-green-600 font-semibold">Resolved</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </DashboardLayout>
    );
}

export default FacultyGrievances;