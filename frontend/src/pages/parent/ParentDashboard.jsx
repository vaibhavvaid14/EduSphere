import React from "react";

const ParentDashboard = () => {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">Parent Dashboard</h1>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white shadow rounded-xl p-5">
                    <h2 className="text-gray-500 text-sm">Ward Attendance</h2>
                    <p className="text-3xl font-bold text-green-600 mt-2">82%</p>
                </div>

                <div className="bg-white shadow rounded-xl p-5">
                    <h2 className="text-gray-500 text-sm">Pending Gatepass Approvals</h2>
                    <p className="text-3xl font-bold text-yellow-500 mt-2">2</p>
                </div>

                <div className="bg-white shadow rounded-xl p-5">
                    <h2 className="text-gray-500 text-sm">Upcoming Meeting</h2>
                    <p className="text-lg mt-2">15 Feb 2026</p>
                </div>
            </div>
        </div>
    );
};

export default ParentDashboard;