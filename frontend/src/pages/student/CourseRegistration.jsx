import { useContext } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { CourseContext } from "../../context/CourseContext";

function CourseRegistration() {

    const { courses, registerCourse } = useContext(CourseContext);

    return (
        <DashboardLayout>
            <div className="space-y-8">

                <h2 className="text-xl font-semibold">
                    Course Registration
                </h2>

                <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                    <table className="min-w-full text-sm">

                        <thead className="bg-indigo-50 text-indigo-700">
                            <tr>
                                <th className="p-4 text-left">Code</th>
                                <th className="p-4 text-left">Course</th>
                                <th className="p-4 text-left">Faculty</th>
                                <th className="p-4 text-left">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {courses.map(course => (
                                <tr key={course.id} className="border-t">

                                    <td className="p-4">{course.code}</td>
                                    <td className="p-4">{course.name}</td>
                                    <td className="p-4">{course.faculty}</td>

                                    <td className="p-4">
                                        <button
                                            onClick={() => registerCourse(course)}
                                            className="bg-indigo-600 text-white px-3 py-1 rounded-md text-xs"
                                        >
                                            Register
                                        </button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

            </div>
        </DashboardLayout>
    );
}

export default CourseRegistration;