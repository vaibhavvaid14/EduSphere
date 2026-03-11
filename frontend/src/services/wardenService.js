import API from "./api";

// Dashboard
export const getWardenDashboardStats = async () => {
    const { data } = await API.get("/warden/dashboard");
    return data;
};

// Gatepass
export const getGatepasses = async (params) => {
    const { data } = await API.get("/warden/gatepasses", { params });
    return data;
};

export const updateGatepassStatus = async (id, updateData) => {
    const { data } = await API.put(`/warden/gatepasses/${id}`, updateData);
    return data;
};

// Logs
export const getHostelLogs = async () => {
    const { data } = await API.get("/warden/logs");
    return data;
};

// Grievances
export const getGrievances = async (params) => {
    const { data } = await API.get("/warden/grievances", { params });
    return data;
};

export const respondToGrievance = async (id, responseData) => {
    const { data } = await API.put(`/warden/grievances/${id}`, responseData);
    return data;
};
