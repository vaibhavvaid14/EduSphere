import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import StudentDashboard from "../pages/dashboard/StudentDashboard";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
        </Routes>
    );
}

export default AppRoutes;