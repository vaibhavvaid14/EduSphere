import DashboardLayout from "../../components/layout/DashboardLayout";
import StatCard from "../../components/common/StatCard";
import BarChart from "../../components/charts/BarChart";
import { useEffect, useState } from "react";
import { getFacultyDashboardStats } from "../../services/facultyService";

function FacultyDashboard() {

    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFacultyDashboardStats().then(data => {
            setStats(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <DashboardLayout>
                <div className="p-8">
                    <p>Loading dashboard...</p>
                </div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <StatCard title="Total Classes" value={stats?.totalClasses || 0} />
                <StatCard title="Students Assigned" value={stats?.students || 0} />
                <StatCard title="Pending Grievances" value={stats?.grievances || 0} />
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
                <BarChart
                    title="Performance"
                    labels={["Unit 1", "Unit 2", "Midterm", "Final"]}
                    dataValues={[72, 80, 76, 85]}
                />
            </div>

        </DashboardLayout>
    );
}

export default FacultyDashboard;