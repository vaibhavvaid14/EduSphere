import DashboardLayout from "../../components/layout/DashboardLayout";
import { useState } from "react";

function ManageMarks() {
    const [marks, setMarks] = useState([
        { id: 1, name: "Adeel Khan", score: 85 },
        { id: 2, name: "Sara Ali", score: 78 },
    ]);

    const updateScore = (id, value) => {
        setMarks(marks.map(student =>
            student.id === id ? { ...student, score: value } : student
        ));
    };

    return (
        <DashboardLayout>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="p-6 border-b">
                    <h2 className="text-xl font-semibold text-slate-700">
                        Upload Marks
                    </h2>
                </div>

                <table className="w-full text-sm">
                    <thead className="bg-indigo-50 text-indigo-700">
                        <tr>
                            <th className="p-4 text-left">Student</th>
                            <th className="p-4 text-left">Marks</th>
                        </tr>
                    </thead>

                    <tbody>
                        {marks.map(student => (
                            <tr key={student.id} className="border-t hover:bg-gray-50 transition">
                                <td className="p-4">{student.name}</td>
                                <td className="p-4">
                                    <input
                                        type="number"
                                        value={student.score}
                                        onChange={(e) => updateScore(student.id, e.target.value)}
                                        className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    );
}

export default ManageMarks;