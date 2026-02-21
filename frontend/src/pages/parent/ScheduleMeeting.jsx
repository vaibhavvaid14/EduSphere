import React, { useState } from "react";

const ScheduleMeeting = () => {
    const [date, setDate] = useState("");

    return (
        <div className="p-6 max-w-lg">
            <h1 className="text-2xl font-bold mb-4">Schedule Mentor Meeting</h1>

            <div className="bg-white shadow rounded-xl p-6 space-y-4">
                <input
                    type="date"
                    className="w-full border rounded-lg p-2"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
                    Schedule Meeting
                </button>
            </div>
        </div>
    );
};

export default ScheduleMeeting;