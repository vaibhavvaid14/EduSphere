import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="bg-white shadow px-8 py-4 flex justify-between items-center">
            <h1 className="text-lg font-semibold text-gray-700">
                Welcome Back 👋
            </h1>

            <div className="flex items-center gap-4">
                <span className="text-gray-600 text-sm">{user?.email}</span>
                <button
                    onClick={logout}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Navbar;