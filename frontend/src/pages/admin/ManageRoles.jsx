import DashboardLayout from "../../components/layout/DashboardLayout";

function ManageRoles() {
    return (
        <DashboardLayout>

            <div className="bg-white p-8 rounded-2xl shadow-md max-w-3xl">
                <h2 className="text-xl font-semibold text-slate-700 mb-6">
                    Role Permissions
                </h2>

                <div className="space-y-6">

                    <RoleCard
                        role="Student"
                        permissions="View attendance, results, notifications, submit grievances"
                    />

                    <RoleCard
                        role="Faculty"
                        permissions="Manage attendance, upload marks, view performance analytics"
                    />

                    <RoleCard
                        role="Admin"
                        permissions="Manage users, roles, calendar, notices, reports"
                    />

                </div>

            </div>

        </DashboardLayout>
    );
}

function RoleCard({ role, permissions }) {
    return (
        <div className="bg-indigo-50 p-6 rounded-xl">
            <h3 className="font-semibold text-indigo-700">{role}</h3>
            <p className="text-gray-600 mt-2 text-sm">{permissions}</p>
        </div>
    );
}

export default ManageRoles;