import { useContext } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { CourseContext } from "../../context/CourseContext";

function FacultyCourses() {

    const { courses } = useContext(CourseContext);

    const facultyName = "Dr. Mehta"; // later from auth

    const myCourses = courses.filter(
        c => c.faculty === facultyName
    );

    return (
        <DashboardLayout>
            <div className="space-y-8">

                <h2 className="text-xl font-semibold">
                    My Assigned Courses
                </h2>

                <div className="bg-white rounded-2xl shadow-md p-6">

                    {myCourses.map(course => (
                        <div key={course.id} className="border-b py-3">
                            <p className="font-medium">{course.name}</p>
                            <p className="text-sm text-gray-500">{course.code}</p>
                        </div>
                    ))}

                </div>

            </div>
        </DashboardLayout>
    );
}

export default FacultyCourses;