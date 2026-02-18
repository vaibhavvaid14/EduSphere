import DashboardLayout from "../../components/layout/DashboardLayout";
import BarChart from "../../components/charts/BarChart";
import StatCard from "../../components/common/StatCard";
function StudentDashboard() {
    return (
        <DashboardLayout>
            <div className="p-8 animate-fadeIn">
                {/* 🔹 Top Statistic Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <StatCard title="Attendance" value="82%" />
                    <StatCard title="GPA" value="8.4" />
                    <StatCard title="Pending Grievances" value="1" />
                </div>

                {/* 🔹 Charts Section */}
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-lg font-semibold mb-4 text-slate-700">
                        Attendance Overview
                    </h3>

                    <BarChart
                        title="Attendance %"
                        labels={["Math", "Physics", "CS", "English"]}
                        dataValues={[85, 78, 92, 88]}
                    />
                </div>
            </div>

            

        </DashboardLayout>
    );
}

// function StatCard({ title, value }) {
//     return (
//         <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
//             <p className="text-slate-500 text-sm">{title}</p>
//             <h2 className="text-3xl font-bold text-indigo-600 mt-2">
//                 {value}
//             </h2>
//         </div>
//     );
// }

export default StudentDashboard;