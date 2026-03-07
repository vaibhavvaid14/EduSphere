import { useContext } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { CourseContext } from "../../context/CourseContext";

function MyCourses() {

    const { registrations } = useContext(CourseContext);

    return (
        <DashboardLayout>
            <div className="space-y-8">

                <h2 className="text-xl font-semibold">
                    My Courses
                </h2>

                <div className="bg-white rounded-2xl shadow-md p-6">

                    {registrations.length === 0 ? (
                        <p>No courses registered yet.</p>
                    ) : (
                        registrations.map(course => (
                            <div key={course.id} className="border-b py-3">
                                <p className="font-medium">{course.name}</p>
                                <p className="text-sm text-gray-500">
                                    {course.code} • {course.faculty}
                                </p>
                            </div>
                        ))
                    )}

                </div>

            </div>
        </DashboardLayout>
    );
}

export default MyCourses;