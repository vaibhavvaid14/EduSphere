import DashboardLayout from "../../components/layout/DashboardLayout";
import StatCard from "../../components/common/StatCard";
import BarChart from "../../components/charts/BarChart";

function FacultyDashboard() {
    return (
        <DashboardLayout>

            {/* KPI Cards */}
            <div className="grid grid-cols-3 gap-6 mb-8">
                <StatCard title="Total Classes" value="24" />
                <StatCard title="Students Assigned" value="180" />
                <StatCard title="Pending Grievances" value="3" />
            </div>

            {/* Performance Chart */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-lg font-semibold text-slate-700 mb-6">
                    Class Performance Overview
                </h3>

                <div className="max-w-3xl mx-auto">
                    <BarChart
                        title="Average Marks"
                        labels={["Math", "Physics", "CS", "English"]}
                        dataValues={[76, 82, 88, 79]}
                    />
                </div>
            </div>

        </DashboardLayout>
    );
}

export default FacultyDashboard;