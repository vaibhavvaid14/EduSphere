export const loginUser = async (credentials) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                role: credentials.role,
                email: credentials.email,
                exp: Date.now() / 1000 + 3600
            });
        }, 800);
    });
};