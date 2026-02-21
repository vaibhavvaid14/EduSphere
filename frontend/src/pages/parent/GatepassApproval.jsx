import React from "react";

const GatepassApproval = () => {
    const requests = [
        { id: 1, reason: "Medical Visit", date: "12 Feb 2026" },
        { id: 2, reason: "Family Function", date: "18 Feb 2026" },
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Gatepass Approval</h1>

            <div className="space-y-4">
                {requests.map((req) => (
                    <div key={req.id} className="bg-white shadow rounded-xl p-5 flex justify-between items-center">
                        <div>
                            <p className="font-semibold">{req.reason}</p>
                            <p className="text-sm text-gray-500">{req.date}</p>
                        </div>
                        <div className="space-x-3">
                            <button className="px-4 py-2 bg-green-500 text-white rounded-lg">
                                Approve
                            </button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
                                Reject
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GatepassApproval;