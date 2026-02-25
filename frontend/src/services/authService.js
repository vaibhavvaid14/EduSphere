export const login = async (credentials) => {
    return {
        token: "dummy_token",
        user: {
            id: "dummy_1",
            name: "Demo User",
            email: credentials.email,
            role: credentials.role || "student"
        }
    };
};

export const register = async (userData) => {
    return { success: true };
};

export const getMe = async () => {
    return {
        id: "dummy_1",
        name: "Demo User",
        email: "demo@edu.com",
        role: "student"
    };
};
