import { createContext, useState } from "react";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {

    const [courses, setCourses] = useState([
        { id: 1, code: "CS201", name: "Data Structures", faculty: "Dr. Mehta" },
        { id: 2, code: "CS202", name: "Operating Systems", faculty: "Dr. Sharma" }
    ]);

    const [registrations, setRegistrations] = useState([]);

    const addCourse = (course) => {
        setCourses(prev => [
            ...prev,
            { id: Date.now(), ...course }
        ]);
    };

    const registerCourse = (course) => {
        setRegistrations(prev => [...prev, course]);
    };

    return (
        <CourseContext.Provider value={{
            courses,
            registrations,
            registerCourse,
            addCourse
        }}>
            {children}
        </CourseContext.Provider>
    );
};