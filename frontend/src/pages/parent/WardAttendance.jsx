import React from "react";

const WardAttendance = () => {
    const subjects = [
        { subject: "Mathematics", attendance: "85%" },
        { subject: "Physics", attendance: "78%" },
        { subject: "Computer Science", attendance: "90%" },
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Ward Attendance</h1>

            <div className="bg-white shadow rounded-xl p-6">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b">
                            <th className="py-2">Subject</th>
                            <th>Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subjects.map((item, index) => (
                            <tr key={index} className="border-b">
                                <td className="py-2">{item.subject}</td>
                                <td>{item.attendance}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WardAttendance;