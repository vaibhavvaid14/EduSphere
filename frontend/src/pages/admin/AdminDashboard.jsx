import DashboardLayout from "../../components/layout/DashboardLayout";
import StatCard from "../../components/common/StatCard";
import PieChart from "../../components/charts/PieChart";

function AdminDashboard() {
    return (
        <DashboardLayout>

            {/* KPI Cards */}
            <div className="grid grid-cols-3 gap-6 mb-8">
                <StatCard title="Total Students" value="320" />
                <StatCard title="Total Faculty" value="28" />
                <StatCard title="Active Notices" value="5" />
            </div>

            {/* System Distribution */}
            <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-lg font-semibold text-slate-700 mb-6">
                    System Distribution
                </h3>

                <div className="flex justify-center">
                    <div className="w-80 h-80">
                        <PieChart
                            labels={["Students", "Faculty", "Admins"]}
                            dataValues={[320, 28, 5]}
                        />
                    </div>
                </div>
            </div>

        </DashboardLayout>
    );
}

export default AdminDashboard;