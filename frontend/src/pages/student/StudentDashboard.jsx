import DashboardLayout from "../../components/layout/DashboardLayout";
import StatCard from "../../components/common/StatCard";
import AttendanceChart from "../../components/student/AttendanceChart";
import AttendanceTable from "../../components/student/AttendanceTable";
import GrievanceForm from "../../components/student/GrievanceForm";
import GrievanceStatus from "../../components/student/GrievanceStatus";
import { useEffect, useState } from "react";
import { getStudentAttendance } from "../../services/studentService";
import Loader from "../../components/common/Loader";
import ErrorMessage from "../../components/common/ErrorMessage";
import NoticeWidget from "../../components/common/NoticeWidget";

function StudentDashboard() {

    const [attendance, setAttendance] = useState([]);
    const [grievances, setGrievances] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getStudentAttendance()
            .then(data => setAttendance(data))
            .catch(() => setError("Failed to load attendance data"))
            .finally(() => setLoading(false));
    }, []);

    const handleGrievanceSubmit = (message) => {
        setGrievances([
            ...grievances,
            { message, status: "Pending" }
        ]);
    };

    if (loading) {
        return (
            <DashboardLayout>
                <Loader />
            </DashboardLayout>
        );
    }

    if (error) {
        return (
            <DashboardLayout>
                <ErrorMessage message={error} />
            </DashboardLayout>
        );
    }

    const average =
        Math.round(
            attendance.reduce((sum, item) => sum + item.percentage, 0) /
            attendance.length
        ) + "%";

    return (
        <DashboardLayout>
            <div className="space-y-8 animate-fadeIn">

                {/* KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <StatCard title="Attendance" value={average} />
                    <StatCard title="GPA" value="8.4" />
                    <StatCard title="Pending Grievances" value={grievances.length} />
                </div>
                <NoticeWidget />

                {/* Attendance Chart */}
                <AttendanceChart attendance={attendance} />

                {/* Attendance Table */}
                <AttendanceTable attendance={attendance} />

                {/* Grievance Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <GrievanceForm onSubmit={handleGrievanceSubmit} />
                    <GrievanceStatus grievances={grievances} />
                </div>

            </div>
        </DashboardLayout>
    );
}

export default StudentDashboard;