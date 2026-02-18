import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Bars3Icon } from "@heroicons/react/24/outline";

function Navbar({ toggleSidebar }) {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="bg-white border-b px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">

            {/* Left Section */}
            <div className="flex items-center gap-4">
                {/* Hamburger (Mobile Only) */}
                <button
                    className="lg:hidden"
                    onClick={toggleSidebar}
                >
                    <Bars3Icon className="w-6 h-6 text-gray-700" />
                </button>

                <h1 className="text-lg font-semibold text-gray-700">
                    Welcome Back 👋
                </h1>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
                <span className="text-gray-600 text-sm hidden sm:block">
                    {user?.email}
                </span>

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