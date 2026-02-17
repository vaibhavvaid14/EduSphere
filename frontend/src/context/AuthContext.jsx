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
        // If it's already an object (dummy mode)
        if (typeof data === "object") {
            setUser(data);

            if (data.role === "student") {
                navigate("/student/dashboard");
            } else if (data.role === "faculty") {
                navigate("/faculty/dashboard");
            } else if (data.role === "admin") {
                navigate("/admin/dashboard");
            }

            return;
        }

        // If it's a real JWT string
        setToken(data);
        const decoded = jwtDecode(data);
        setUser(decoded);

        if (decoded.role === "student") {
            navigate("/student/dashboard");
        } else if (decoded.role === "faculty") {
            navigate("/faculty/dashboard");
        } else if (decoded.role === "admin") {
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