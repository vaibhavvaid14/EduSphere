import DashboardLayout from "../../components/layout/DashboardLayout";

function Profile() {
    return (
        <DashboardLayout>
            <div className="bg-white rounded-2xl shadow-md p-8 max-w-3xl">
                <h2 className="text-2xl font-semibold text-slate-700 mb-6">
                    Student Profile
                </h2>

                <div className="grid grid-cols-2 gap-6 text-gray-700">
                    <ProfileItem label="Full Name" value="Adeel Khan" />
                    <ProfileItem label="Email" value="student@edu.com" />
                    <ProfileItem label="Department" value="Computer Science" />
                    <ProfileItem label="Semester" value="6" />
                    <ProfileItem label="Enrollment No" value="CS2023101" />
                    <ProfileItem label="Phone" value="+91 9876543210" />
                </div>
            </div>
        </DashboardLayout>
    );
}

function ProfileItem({ label, value }) {
    return (
        <div>
            <p className="text-sm text-slate-500">{label}</p>
            <p className="font-semibold mt-1">{value}</p>
        </div>
    );
}

export default Profile;