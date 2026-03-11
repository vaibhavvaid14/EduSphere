import API from "./api";

export const login = async (credentials) => {
    const { data } = await API.post("/auth/login", {
        email: credentials.email,
        password: credentials.password,
    });
    return data;
};

export const register = async (userData) => {
    const { data } = await API.post("/auth/register", userData);
    return data;
};

export const getMe = async () => {
    const { data } = await API.get("/auth/me");
    return data;
};
