import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { setToken, getToken, removeToken } from "../utils/tokenHandler";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [sessionExpiry, setSessionExpiry] = useState(null);

    // 🔹 Load user from token on refresh
    useEffect(() => {
        const token = getToken();

        if (token) {
            try {
                const decoded = jwtDecode(token);

                if (decoded.exp * 1000 < Date.now()) {
                    logout();
                } else {
                    setUser(decoded);
                    setSessionExpiry(decoded.exp * 1000);
                }
            } catch (error) {
                console.error("Invalid token");
                logout();
            }
        }

        setLoading(false);
    }, []);

    // 🔹 Faculty 24-Hour Session Expiry Checker
    useEffect(() => {
        if (!user || !sessionExpiry) return;

        const interval = setInterval(() => {
            if (Date.now() > sessionExpiry) {
                alert("Session expired. Please login again.");
                logout();
            }
        }, 60000); // check every 1 min

        return () => clearInterval(interval);
    }, [user, sessionExpiry]);

    // 🔹 Login Function
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

        // If backend does not provide exp for faculty in dummy mode
        if (userData.role === "faculty" && !userData.exp) {
            const expiry = Date.now() + 24 * 60 * 60 * 1000;
            setSessionExpiry(expiry);
        } else if (userData.exp) {
            setSessionExpiry(userData.exp * 1000);
        }

        // 🔹 Redirect based on role
        switch (userData.role) {
            case "student":
                navigate("/student/dashboard");
                break;
            case "faculty":
                navigate("/faculty/dashboard");
                break;
            case "admin":
                navigate("/admin/dashboard");
                break;
            case "parent":
                navigate("/parent/dashboard");
                break;
            case "warden":
                navigate("/warden/dashboard");
                break;
            default:
                navigate("/login");
        }
    };

    // 🔹 Logout
    const logout = () => {
        removeToken();
        setUser(null);
        setSessionExpiry(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};