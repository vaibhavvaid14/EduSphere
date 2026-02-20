import DashboardLayout from "../../components/layout/DashboardLayout";
import StatCard from "../../components/common/StatCard";
import StudentPerformance from "../../components/faculty/StudentPerformance";
import MarkAttendance from "../../components/faculty/MarkAttendance";
import UploadMarks from "../../components/faculty/UploadMarks";
import RespondGrievance from "../../components/faculty/RespondGrievance";
import Loader from "../../components/common/Loader";
import ErrorMessage from "../../components/common/ErrorMessage";
import { useEffect, useState } from "react";
import { getFacultyDashboardStats } from "../../services/facultyService";

function FacultyDashboard() {

    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getFacultyDashboardStats()
            .then(data => setStats(data))
            .catch(() => setError("Failed to load faculty data"))
            .finally(() => setLoading(false));
    }, []);

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

    return (
        <DashboardLayout>
            <div className="space-y-8 animate-fadeIn">

                {/* KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <StatCard title="Total Classes" value={stats.totalClasses} />
                    <StatCard title="Students Assigned" value={stats.students} />
                    <StatCard title="Pending Grievances" value={stats.grievances} />
                </div>

                {/* Performance Analytics */}
                <StudentPerformance />

                {/* Attendance + Marks Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <MarkAttendance />
                    <UploadMarks />
                </div>

                {/* Grievance Response */}
                <RespondGrievance />

            </div>
        </DashboardLayout>
    );
}

export default FacultyDashboard;