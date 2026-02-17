import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../components/common/ProtectedRoute";

// Auth Pages
import Login from "../pages/auth/Login";
import Unauthorized from "../pages/auth/Unauthorized";

// Student Pages
import StudentDashboard from "../pages/student/StudentDashboard";
import Profile from "../pages/student/Profile";
import Attendance from "../pages/student/Attendance";
import Results from "../pages/student/Results";
import Notifications from "../pages/student/Notifications";
import Grievance from "../pages/student/Grievance";

// Faculty Pages
import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import ManageAttendance from "../pages/faculty/ManageAttendance";
import ManageMarks from "../pages/faculty/ManageMarks";
import PerformanceAnalytics from "../pages/faculty/PerformanceAnalytics";
import FacultyGrievances from "../pages/faculty/FacultyGrievances";

// Admin Pages
import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageUsers from "../pages/admin/ManageUsers";
import ManageRoles from "../pages/admin/ManageRoles";
import Calendar from "../pages/admin/Calendar";
import Notices from "../pages/admin/Notices";
import Reports from "../pages/admin/Reports";

function AppRoutes() {
    return (
        <Routes>

            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/unauthorized" element={<Unauthorized />} />

            {/* ================= STUDENT ROUTES ================= */}
            <Route
                path="/student/dashboard"
                element={
                    <ProtectedRoute allowedRoles={["student"]}>
                        <StudentDashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/student/profile"
                element={
                    <ProtectedRoute allowedRoles={["student"]}>
                        <Profile />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/student/attendance"
                element={
                    <ProtectedRoute allowedRoles={["student"]}>
                        <Attendance />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/student/results"
                element={
                    <ProtectedRoute allowedRoles={["student"]}>
                        <Results />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/student/notifications"
                element={
                    <ProtectedRoute allowedRoles={["student"]}>
                        <Notifications />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/student/grievance"
                element={
                    <ProtectedRoute allowedRoles={["student"]}>
                        <Grievance />
                    </ProtectedRoute>
                }
            />

            {/* ================= FACULTY ROUTES ================= */}
            <Route
                path="/faculty/dashboard"
                element={
                    <ProtectedRoute allowedRoles={["faculty"]}>
                        <FacultyDashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/faculty/attendance"
                element={
                    <ProtectedRoute allowedRoles={["faculty"]}>
                        <ManageAttendance />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/faculty/marks"
                element={
                    <ProtectedRoute allowedRoles={["faculty"]}>
                        <ManageMarks />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/faculty/performance"
                element={
                    <ProtectedRoute allowedRoles={["faculty"]}>
                        <PerformanceAnalytics />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/faculty/grievances"
                element={
                    <ProtectedRoute allowedRoles={["faculty"]}>
                        <FacultyGrievances />
                    </ProtectedRoute>
                }
            />

            {/* ================= ADMIN ROUTES ================= */}
            <Route
                path="/admin/dashboard"
                element={
                    <ProtectedRoute allowedRoles={["admin"]}>
                        <AdminDashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/admin/users"
                element={
                    <ProtectedRoute allowedRoles={["admin"]}>
                        <ManageUsers />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/admin/roles"
                element={
                    <ProtectedRoute allowedRoles={["admin"]}>
                        <ManageRoles />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/admin/calendar"
                element={
                    <ProtectedRoute allowedRoles={["admin"]}>
                        <Calendar />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/admin/notices"
                element={
                    <ProtectedRoute allowedRoles={["admin"]}>
                        <Notices />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/admin/reports"
                element={
                    <ProtectedRoute allowedRoles={["admin"]}>
                        <Reports />
                    </ProtectedRoute>
                }
            />

            {/* Default Redirect */}
            <Route path="*" element={<Navigate to="/login" />} />

        </Routes>
    );
}

export default AppRoutes;
