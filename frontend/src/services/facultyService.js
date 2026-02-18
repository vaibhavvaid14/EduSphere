import { fakeApi } from "./api";

export const getFacultyDashboardStats = async () => {
    return fakeApi({
        totalClasses: 24,
        students: 180,
        grievances: 3,
    });
};