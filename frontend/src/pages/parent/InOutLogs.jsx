import React from "react";

const InOutLogs = () => {
    const logs = [
        { date: "10 Feb", out: "10:00 AM", in: "4:00 PM" },
        { date: "12 Feb", out: "2:00 PM", in: "6:00 PM" },
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">In/Out Logs</h1>

            <div className="bg-white shadow rounded-xl p-6">
                <table className="w-full">
                    <thead>
                        <tr className="border-b">
                            <th>Date</th>
                            <th>Out Time</th>
                            <th>In Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.map((log, index) => (
                            <tr key={index} className="border-b">
                                <td className="py-2">{log.date}</td>
                                <td>{log.out}</td>
                                <td>{log.in}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InOutLogs;