import DashboardLayout from "../../components/layout/DashboardLayout";

function EventsPage() {

    const events = [
        { id: 1, title: "Tech Fest", date: "15 March 2026" },
        { id: 2, title: "Sports Day", date: "10 April 2026" }
    ];

    return (
        <DashboardLayout>
            <div className="space-y-8 animate-fadeIn">
                <h2 className="text-xl font-semibold">Upcoming Events</h2>

                <div className="bg-white rounded-xl shadow-md p-6 overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="border-b text-sm text-gray-500">
                            <tr>
                                <th className="py-3">Event</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.map(event => (
                                <tr key={event.id} className="border-b hover:bg-gray-50">
                                    <td className="py-3">{event.title}</td>
                                    <td>{event.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </DashboardLayout>
    );
}

export default EventsPage;