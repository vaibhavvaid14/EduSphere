function NoticeWidget() {

    const notices = [
        "Mid-Sem Exams start from 20 Feb",
        "Holiday on 26 Jan"
    ];

    return (
        <div className="bg-white rounded-xl shadow-md p-5">
            <h3 className="font-semibold mb-3">Latest Notices</h3>
            <ul className="space-y-2 text-sm text-gray-600">
                {notices.map((notice, index) => (
                    <li key={index}>• {notice}</li>
                ))}
            </ul>
        </div>
    );
}

export default NoticeWidget;