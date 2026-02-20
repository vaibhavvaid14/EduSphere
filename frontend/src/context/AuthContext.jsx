import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { setToken, getToken, removeToken } from "../utils/tokenHandler";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // 🔹 Load user from token on refresh
    useEffect(() => {
        const token = getToken();

        if (token) {
            try {
                const decoded = jwtDecode(token);

                // Check expiration
                if (decoded.exp * 1000 < Date.now()) {
                    logout();
                } else {
                    setUser(decoded);
                }
            } catch (error) {
                console.error("Invalid token");
                logout();
            }
        }

        setLoading(false);
    }, []);

    // 🔹 Login function
    // const login = (token) => {
    //     setToken(token);
    //     const decoded = jwtDecode(token);
    //     setUser(decoded);

    //     // Redirect based on role
    //     if (decoded.role === "student") {
    //         navigate("/student/dashboard");
    //     } else if (decoded.role === "faculty") {
    //         navigate("/faculty/dashboard");
    //     } else if (decoded.role === "admin") {
    //         navigate("/admin/dashboard");
    //     }
    // };
    const login = (data) => {
        let userData;

        if (typeof data === "object") {
            // Dummy mode
            userData = data;
        } else {
            // Real JWT mode
            setToken(data);
            userData = jwtDecode(data);
        }

        setUser(userData);

        if (userData.role === "student") {
            navigate("/student/dashboard");
        } else if (userData.role === "faculty") {
            navigate("/faculty/dashboard");
        } else if (userData.role === "admin") {
            navigate("/admin/dashboard");
        }
    };

    // 🔹 Logout function
    const logout = () => {
        removeToken();
        setUser(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};