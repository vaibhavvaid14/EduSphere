import BarChart from "../charts/BarChart";

function ReportsAnalytics() {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-6 text-slate-700">
                Reports & Analytics
            </h2>

            <div className="max-w-3xl mx-auto h-80">
                <BarChart
                    title="System Performance"
                    labels={["Attendance", "GPA", "Engagement"]}
                    dataValues={[82, 8.2, 76]}
                />
            </div>
        </div>
    );
}

export default ReportsAnalytics;