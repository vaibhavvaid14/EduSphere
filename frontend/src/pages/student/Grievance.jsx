import DashboardLayout from "../../components/layout/DashboardLayout";
import { useState } from "react";

function Grievance() {
    const [message, setMessage] = useState("");

    return (
        <DashboardLayout>
            <div className="bg-white rounded-2xl shadow-md p-8 max-w-xl">
                <h2 className="text-xl font-semibold text-slate-700 mb-6">
                    Submit Grievance
                </h2>

                <form className="space-y-4">
                    <textarea
                        rows="5"
                        className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-indigo-500 outline-none"
                        placeholder="Describe your issue..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <button
                        type="button"
                        className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </DashboardLayout>
    );
}

export default Grievance;