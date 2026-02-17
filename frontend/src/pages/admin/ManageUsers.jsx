import DashboardLayout from "../../components/layout/DashboardLayout";

function ManageUsers() {
    return (
        <DashboardLayout>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="p-6 border-b">
                    <h2 className="text-xl font-semibold text-slate-700">
                        User Management
                    </h2>
                </div>

                <table className="w-full text-sm">
                    <thead className="bg-indigo-50 text-indigo-700">
                        <tr>
                            <th className="p-4 text-left">Name</th>
                            <th className="p-4 text-left">Email</th>
                            <th className="p-4 text-left">Role</th>
                            <th className="p-4 text-left">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <UserRow name="Adeel Khan" email="student@edu.com" role="Student" status="Active" />
                        <UserRow name="Dr. Smith" email="faculty@edu.com" role="Faculty" status="Active" />
                    </tbody>
                </table>

            </div>

        </DashboardLayout>
    );
}

function UserRow({ name, email, role, status }) {
    return (
        <tr className="border-t hover:bg-gray-50 transition">
            <td className="p-4">{name}</td>
            <td className="p-4">{email}</td>
            <td className="p-4 font-medium">{role}</td>
            <td className="p-4 text-green-600 font-semibold">{status}</td>
        </tr>
    );
}

export default ManageUsers;