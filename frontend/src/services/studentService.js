import { fakeApi } from "./api";

export const getStudentAttendance = async () => {
    return fakeApi([
        { subject: "Math", percentage: 85 },
        { subject: "Physics", percentage: 78 },
        { subject: "CS", percentage: 92 },
    ]);
};

export const getStudentResults = async () => {
    return fakeApi([
        { subject: "Math", marks: 88 },
        { subject: "Physics", marks: 75 },
    ]);
};