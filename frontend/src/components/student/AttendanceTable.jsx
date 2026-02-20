function AttendanceTable({ attendance }) {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-slate-700">
                    Attendance Record
                </h2>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                    <thead className="bg-indigo-50 text-indigo-700">
                        <tr>
                            <th className="p-4 text-left">Subject</th>
                            <th className="p-4 text-left">Percentage</th>
                        </tr>
                    </thead>

                    <tbody>
                        {attendance.map((item, index) => (
                            <tr key={index} className="border-t">
                                <td className="p-4">{item.subject}</td>
                                <td className="p-4 font-semibold text-indigo-600">
                                    {item.percentage}%
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AttendanceTable;