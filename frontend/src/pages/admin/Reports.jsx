import DashboardLayout from "../../components/layout/DashboardLayout";
import BarChart from "../../components/charts/BarChart";

function Reports() {
    return (
        <DashboardLayout>

            <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-xl font-semibold text-slate-700 mb-6">
                    System Reports
                </h2>

                <div className="max-w-3xl mx-auto">
                    <BarChart
                        title="Overall Performance"
                        labels={["Attendance", "GPA", "Engagement"]}
                        dataValues={[81, 8.1, 74]}
                    />
                </div>

            </div>

        </DashboardLayout>
    );
}

export default Reports;