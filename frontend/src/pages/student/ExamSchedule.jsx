import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';

const ExamSchedule = () => {
    const schedule = [
        { id: 1, subject: "Artificial Intelligence", code: "CS301", date: "May 15, 2024", time: "10:00 AM - 01:00 PM", venue: "Lobby Hall, Block A" },
        { id: 2, subject: "Cloud Computing", code: "CS302", date: "May 18, 2024", time: "10:00 AM - 01:00 PM", venue: "Lab 4, IT Block" },
        { id: 3, subject: "Mobile App Development", code: "CS303", date: "May 21, 2024", time: "10:00 AM - 01:00 PM", venue: "Room 102, Main Block" },
        { id: 4, subject: "Cyber Security", code: "CS304", date: "May 24, 2024", time: "10:00 AM - 01:00 PM", venue: "Lobby Hall, Block A" },
    ];

    return (
        <DashboardLayout>
            <div className="max-w-6xl mx-auto space-y-8">
                <header>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Examination Schedule</h1>
                    <p className="text-gray-500 mt-1">View your upcoming examination dates and venues.</p>
                </header>

                <div className="grid grid-cols-1 gap-4">
                    {schedule.map((item) => (
                        <div key={item.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 font-bold">
                                        {item.code}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800">{item.subject}</h3>
                                        <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                                            <span className="flex items-center gap-1"><FiCalendar className="text-indigo-400" /> {item.date}</span>
                                            <span className="flex items-center gap-1"><FiClock className="text-indigo-400" /> {item.time}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100 self-start md:self-center">
                                    <FiMapPin className="text-indigo-500" />
                                    <span className="text-sm font-semibold text-gray-700">{item.venue}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default ExamSchedule;
