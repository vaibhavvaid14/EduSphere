import { fakeApi } from "./api";

export const getAdminStats = async () => {
    return fakeApi({
        students: 320,
        faculty: 28,
        notices: 5,
    });
};