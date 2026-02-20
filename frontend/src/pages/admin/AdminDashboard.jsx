import DashboardLayout from "../../components/layout/DashboardLayout";
import StatCard from "../../components/common/StatCard";
import PieChart from "../../components/charts/PieChart";
import { useState, useEffect } from "react";
import { getAdminStats } from "../../services/adminService";

function AdminDashboard() {

    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAdminStats().then(data => {
            setStats(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <DashboardLayout>
                <div className="p-8">
                    <p className="text-gray-600">Loading admin dashboard...</p>
                </div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <StatCard title="Total Students" value={stats.students} />
                <StatCard title="Total Faculty" value={stats.faculty} />
                <StatCard title="Active Notices" value={stats.notices} />
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
                            dataValues={[
                                stats.students,
                                stats.faculty,
                                5
                            ]}
                        />
                    </div>
                </div>
            </div>

        </DashboardLayout>
    );
}

export default AdminDashboard;