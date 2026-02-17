import DashboardLayout from "../../components/layout/DashboardLayout";

function Notifications() {
    return (
        <DashboardLayout>
            <div className="space-y-4">
                <NotificationCard
                    title="Mid Semester Exams"
                    message="Exams will begin from 20th March."
                />
                <NotificationCard
                    title="Assignment Deadline"
                    message="Submission deadline extended to 25th March."
                />
            </div>
        </DashboardLayout>
    );
}

function NotificationCard({ title, message }) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold text-slate-700">{title}</h3>
            <p className="text-gray-600 mt-2">{message}</p>
        </div>
    );
}

export default Notifications;