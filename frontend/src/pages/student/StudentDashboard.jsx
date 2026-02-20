import DashboardLayout from "../../components/layout/DashboardLayout";
import BarChart from "../../components/charts/BarChart";
import StatCard from "../../components/common/StatCard";
import { useEffect, useState } from "react";
import { getStudentAttendance } from "../../services/studentService";

function StudentDashboard() {

    const [attendanceData, setAttendanceData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getStudentAttendance().then((data) => {
            setAttendanceData(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <DashboardLayout>
                <div className="p-8">
                    <p className="text-gray-600">Loading dashboard...</p>
                </div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <div className="p-8 animate-fadeIn">

                {/* KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <StatCard
                        title="Attendance"
                        value={
                            Math.round(
                                attendanceData.reduce((sum, item) => sum + item.percentage, 0) /
                                attendanceData.length
                            ) + "%"
                        }
                    />
                    <StatCard title="GPA" value="8.4" />
                    <StatCard title="Pending Grievances" value="1" />
                </div>

                {/* Chart */}
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-lg font-semibold mb-4 text-slate-700">
                        Attendance Overview
                    </h3>

                    <div className="max-w-3xl mx-auto h-72">
                        <BarChart
                            title="Attendance %"
                            labels={attendanceData.map(item => item.subject)}
                            dataValues={attendanceData.map(item => item.percentage)}
                        />
                    </div>
                </div>

            </div>
        </DashboardLayout>
    );
}

export default StudentDashboard;