import DashboardLayout from "../../components/layout/DashboardLayout";

function NoticeBoard() {

    const notices = [
        { id: 1, title: "Mid-Sem Exams", content: "Exams start from 20 Feb 2026" },
        { id: 2, title: "Holiday Notice", content: "University closed on 26 Jan" }
    ];

    return (
        <DashboardLayout>
            <div className="space-y-8 animate-fadeIn">
                <h2 className="text-xl font-semibold">Notice Board</h2>

                {notices.map((notice) => (
                    <div key={notice.id} className="bg-white rounded-xl shadow-md p-6">
                        <h3 className="font-semibold text-lg mb-2">{notice.title}</h3>
                        <p className="text-gray-600">{notice.content}</p>
                    </div>
                ))}

            </div>
        </DashboardLayout>
    );
}

export default NoticeBoard;