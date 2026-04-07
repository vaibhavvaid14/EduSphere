import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { TimetableContext } from "../../context/TimetableContext";
import { AuthContext } from "../../context/AuthContext";

function FacultyTimetable() {
    const navigate = useNavigate();
    const { timetable, fetchTimetable } = useContext(TimetableContext);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetchTimetable();
    }, [fetchTimetable]);

    const myLectures = timetable.filter(
        lecture => lecture.course?.faculty?._id === user?._id || lecture.course?.faculty === user?._id
    );

    const handleMarkAttendance = (lecture) => {
        if (lecture.isMarked) return;
        
        // Pass course ID via state to ManageAttendance
        navigate("/faculty/attendance", { 
            state: { 
                courseId: lecture.course?._id,
                department: lecture.department,
                semester: lecture.semester
            } 
        });
    };

    return (
        <DashboardLayout>
            <div className="space-y-8 animate-fadeIn">

                <h2 className="text-xl font-semibold">
                    My Lecture Schedule
                </h2>

                <div className="bg-white rounded-2xl shadow-md p-6 overflow-x-auto hidden md:block">
                    <table className="min-w-full text-sm">
                        <thead className="bg-indigo-50 text-indigo-700">
                            <tr>
                                <th className="p-4 text-left">Class</th>
                                <th className="p-4 text-left">Subject</th>
                                <th className="p-4 text-left">Day</th>
                                <th className="p-4 text-left">Time</th>
                                <th className="p-4 text-left">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {myLectures.map(lecture => (
                                <tr key={lecture._id || lecture.id} className="border-t">
                                    <td className="p-4">{lecture.department} Sem {lecture.semester}</td>
                                    <td className="p-4">{lecture.course?.title || lecture.subject}</td>
                                    <td className="p-4">{lecture.day}</td>
                                    <td className="p-4">{lecture.startTime} - {lecture.endTime}</td>
                                    <td className="p-4">
                                        <button 
                                            onClick={() => handleMarkAttendance(lecture)}
                                            className={`${lecture.isMarked ? "bg-slate-500" : "bg-emerald-600 hover:bg-emerald-700"} text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors`}
                                        >
                                            {lecture.isMarked ? "Marked" : "Mark Attendance"}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="block md:hidden space-y-4">
                    {myLectures.length === 0 ? (
                        <div className="text-center p-6 bg-white rounded-2xl shadow-sm text-slate-500">No lectures scheduled.</div>
                    ) : (
                        myLectures.map((lecture) => (
                            <div key={lecture._id || lecture.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-sm font-semibold text-slate-800">{lecture.course?.title || lecture.subject}</h3>
                                    <span className="text-xs font-medium text-indigo-700">{lecture.day}</span>
                                </div>
                                <p className="text-xs text-slate-500 mb-1">Class: {lecture.department} Sem {lecture.semester}</p>
                                <p className="text-xs text-slate-500 mb-3">Time: {lecture.startTime} - {lecture.endTime}</p>
                                <button 
                                    onClick={() => handleMarkAttendance(lecture)}
                                    className={`w-full text-center ${lecture.isMarked ? "bg-slate-500" : "bg-emerald-600"} text-white px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors`}
                                >
                                    {lecture.isMarked ? "Marked" : "Mark Attendance"}
                                </button>
                            </div>
                        ))
                    )}
                </div>

            </div>
        </DashboardLayout>
    );
}

export default FacultyTimetable;