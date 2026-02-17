import DashboardLayout from "../../components/layout/DashboardLayout";

function Results() {
    return (
        <DashboardLayout>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="p-6 border-b">
                    <h2 className="text-xl font-semibold text-slate-700">
                        Academic Results
                    </h2>
                </div>

                <table className="w-full text-sm">
                    <thead className="bg-indigo-50 text-indigo-700">
                        <tr>
                            <th className="p-4 text-left">Subject</th>
                            <th className="p-4 text-left">Marks</th>
                            <th className="p-4 text-left">Grade</th>
                        </tr>
                    </thead>

                    <tbody className="text-gray-700">
                        <ResultRow subject="Mathematics" marks="88" grade="A" />
                        <ResultRow subject="Physics" marks="75" grade="B+" />
                        <ResultRow subject="Computer Science" marks="92" grade="A+" />
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    );
}

function ResultRow({ subject, marks, grade }) {
    return (
        <tr className="border-t hover:bg-gray-50 transition">
            <td className="p-4">{subject}</td>
            <td className="p-4">{marks}</td>
            <td className="p-4 font-semibold text-green-600">{grade}</td>
        </tr>
    );
}

export default Results;