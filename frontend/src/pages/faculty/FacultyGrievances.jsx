import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { getGrievances, respondToGrievance } from "../../services/facultyService";
import Loader from "../../components/common/Loader";
import ErrorMessage from "../../components/common/ErrorMessage";

function FacultyGrievances() {
    const [grievances, setGrievances] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [respondingId, setRespondingId] = useState(null);
    const [responseMsg, setResponseMsg] = useState("");

    const fetchGrievances = async () => {
        try {
            const data = await getGrievances();
            setGrievances(data.grievances);
            setLoading(false);
        } catch (err) {
            setError("Failed to load grievances");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGrievances();
    }, []);

    const handleRespond = async (id) => {
        if (!responseMsg) return;
        try {
            await respondToGrievance(id, { response: responseMsg, status: "resolved" });
            setRespondingId(null);
            setResponseMsg("");
            fetchGrievances();
        } catch (err) {
            alert("Failed to respond to grievance");
        }
    };

    if (loading) return <DashboardLayout><Loader /></DashboardLayout>;
    if (error) return <DashboardLayout><ErrorMessage message={error} /></DashboardLayout>;

    return (
        <DashboardLayout>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="p-6 border-b">
                    <h2 className="text-xl font-semibold text-slate-700">
                        Student Grievances
                    </h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead className="bg-indigo-50 text-indigo-700">
                            <tr>
                                <th className="p-4 text-left">Student</th>
                                <th className="p-4 text-left">Department</th>
                                <th className="p-4 text-left">Issue</th>
                                <th className="p-4 text-left">Status</th>
                                <th className="p-4 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {grievances.length > 0 ? grievances.map((g) => (
                                <tr key={g._id} className="border-t hover:bg-gray-50 transition">
                                    <td className="p-4">
                                        <div className="font-medium text-slate-800">{g.student?.name}</div>
                                        <div className="text-xs text-slate-500">{g.student?.enrollmentNo}</div>
                                    </td>
                                    <td className="p-4 text-slate-600">{g.student?.department}</td>
                                    <td className="p-4">
                                        <div className="font-bold text-slate-700">{g.subject}</div>
                                        <div className="text-slate-500 max-w-xs truncate" title={g.description}>{g.description}</div>
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase 
                                            ${g.status === 'pending' ? 'bg-orange-100 text-orange-700' : 
                                              g.status === 'resolved' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                                            {g.status}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        {g.status === 'pending' ? (
                                            respondingId === g._id ? (
                                                <div className="flex flex-col gap-2">
                                                    <textarea 
                                                        className="border rounded p-2 text-xs w-48"
                                                        placeholder="Write response..."
                                                        value={responseMsg}
                                                        onChange={(e) => setResponseMsg(e.target.value)}
                                                    />
                                                    <div className="flex gap-2">
                                                        <button 
                                                            onClick={() => handleRespond(g._id)}
                                                            className="bg-indigo-600 text-white px-2 py-1 rounded text-xs"
                                                        >
                                                            Send
                                                        </button>
                                                        <button 
                                                            onClick={() => setRespondingId(null)}
                                                            className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-xs"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <button 
                                                    onClick={() => setRespondingId(g._id)}
                                                    className="text-indigo-600 hover:text-indigo-800 font-semibold"
                                                >
                                                    Respond
                                                </button>
                                            )
                                        ) : (
                                            <div className="text-xs text-slate-400 italic">Responded</div>
                                        )}
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="5" className="p-8 text-center text-slate-400">No grievances found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default FacultyGrievances;