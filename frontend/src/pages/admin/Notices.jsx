import DashboardLayout from "../../components/layout/DashboardLayout";
import { useState } from "react";

function Notices() {
    const [notice, setNotice] = useState("");

    return (
        <DashboardLayout>

            <div className="bg-white p-8 rounded-2xl shadow-md max-w-xl">
                <h2 className="text-xl font-semibold text-slate-700 mb-6">
                    Publish Notice
                </h2>

                <textarea
                    rows="4"
                    className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-indigo-500 outline-none"
                    placeholder="Enter notice content..."
                    value={notice}
                    onChange={(e) => setNotice(e.target.value)}
                />

                <button
                    className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                    Publish
                </button>
            </div>

        </DashboardLayout>
    );
}

export default Notices;