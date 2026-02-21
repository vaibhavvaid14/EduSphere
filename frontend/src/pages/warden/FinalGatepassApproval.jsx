import React from "react";

const FinalGatepassApproval = () => {
    const requests = [
        { id: 1, student: "Aman Verma", reason: "Medical Visit" },
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Final Gatepass Approval</h1>

            {requests.map((req) => (
                <div key={req.id} className="bg-white shadow rounded-xl p-5 flex justify-between">
                    <div>
                        <p className="font-semibold">{req.student}</p>
                        <p className="text-sm text-gray-500">{req.reason}</p>
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
    );
};

export default FinalGatepassApproval;