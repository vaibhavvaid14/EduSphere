import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Sidebar({ closeSidebar }) {
    {
        const { user } = useContext(AuthContext);

        return (
            <div className="w-64 h-screen bg-indigo-950 text-white fixed flex flex-col">
                <div className="p-6 text-2xl font-bold border-b border-indigo-800">
                    EduSphere
                </div>

                <div className="flex-1 p-6 space-y-2 text-sm">

                    {user?.role === "student" && (
                        <>
                            <SidebarItem to="/student/dashboard" label="Dashboard" />
                            <SidebarItem to="/student/profile" label="Profile" />
                            <SidebarItem to="/student/attendance" label="Attendance" />
                            <SidebarItem to="/student/results" label="Results" />
                            <SidebarItem to="/student/notifications" label="Notifications" />
                            <SidebarItem to="/student/grievance" label="Grievance" />
                        </>
                    )}

                    {user?.role === "faculty" && (
                        <>
                            <SidebarItem to="/faculty/dashboard" label="Dashboard" />
                            <SidebarItem to="/faculty/attendance" label="Attendance" />
                            <SidebarItem to="/faculty/marks" label="Marks" />
                            <SidebarItem to="/faculty/performance" label="Analytics" />
                            <SidebarItem to="/faculty/grievances" label="Grievances" />
                        </>
                    )}

                    {user?.role === "admin" && (
                        <>
                            <SidebarItem to="/admin/dashboard" label="Dashboard" />
                            <SidebarItem to="/admin/users" label="Users" />
                            <SidebarItem to="/admin/roles" label="Roles" />
                            <SidebarItem to="/admin/calendar" label="Calendar" />
                            <SidebarItem to="/admin/notices" label="Notices" />
                            <SidebarItem to="/admin/reports" label="Reports" />
                        </>
                    )}

                </div>
            </div>
        );
    }

    function SidebarItem({ to, label }) {
        return (
            <NavLink
                to={to}
                onClick={closeSidebar}
                className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg transition ${isActive
                        ? "bg-indigo-700 text-white"
                        : "hover:bg-indigo-800 text-indigo-200"
                    }`
                }
            >
                {label}
            </NavLink>
        );
    }
}
    export default Sidebar;