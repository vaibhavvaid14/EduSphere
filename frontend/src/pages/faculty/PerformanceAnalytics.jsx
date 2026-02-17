import DashboardLayout from "../../components/layout/DashboardLayout";
import BarChart from "../../components/charts/BarChart";

function PerformanceAnalytics() {
    return (
        <DashboardLayout>

            <div className="bg-white p-6 rounded-2xl shadow-md">
                <h2 className="text-xl font-semibold text-slate-700 mb-6">
                    Detailed Performance Analysis
                </h2>

                <div className="max-w-4xl mx-auto">
                    <BarChart
                        title="Class Average"
                        labels={["Unit 1", "Unit 2", "Midterm", "Final"]}
                        dataValues={[72, 80, 76, 85]}
                    />
                </div>

            </div>

        </DashboardLayout>
    );
}

export default PerformanceAnalytics;