import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import doodle from "../../assets/images/doodle2.jpg";
function Login() {
    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("student");

    const handleSubmit = (e) => {
        e.preventDefault();

        const fakeToken = {
            role: role,
            email: email,
            exp: Date.now() / 1000 + 3600
        };

        login(fakeToken);
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-600"></div>
            {/* 🔹 Background Doodle Blobs */}
            <div
                className="absolute inset-0 bg-center bg-repeat opacity-20"
                style={{ backgroundImage: `url(${doodle})` }}
            ></div>
            <div className="absolute inset-0 bg-indigo-900 opacity-40"></div>

            {/* 🔹 Login Card */}
            <div className="relative z-10 bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-10 w-full max-w-md animate-fadeIn">

                <h2 className="text-3xl font-bold text-center text-slate-800 mb-2">
                    EduSphere
                </h2>

                <p className="text-center text-slate-500 mb-8 text-sm">
                    University Management System
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Role Selector */}
                    <div>
                        <label className="block text-sm text-slate-600 mb-1">
                            Login As
                        </label>
                        <select
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="student">Student</option>
                            <option value="faculty">Faculty</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm text-slate-600 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="student@edu.com"
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm text-slate-600 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200 shadow-md hover:shadow-lg"
                    >
                        Sign In
                    </button>

                </form>
            </div>
        </div>
    );
}

export default Login;