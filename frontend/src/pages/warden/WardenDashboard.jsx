import React from "react";

const WardenDashboard = () => {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">Warden Dashboard</h1>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white shadow rounded-xl p-6">
                    <h2 className="text-gray-500">Pending Final Approvals</h2>
                    <p className="text-3xl font-bold text-red-600 mt-2">3</p>
                </div>

                <div className="bg-white shadow rounded-xl p-6">
                    <h2 className="text-gray-500">Hostel Grievances</h2>
                    <p className="text-3xl font-bold text-yellow-500 mt-2">1</p>
                </div>
            </div>
        </div>
    );
};

export default WardenDashboard;