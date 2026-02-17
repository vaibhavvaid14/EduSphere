import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function DashboardLayout({ children }) {
    return (
        <div className="flex bg-gray-100 min-h-screen">
            <Sidebar />
            <div className="flex-1 ml-64">
                <Navbar />
                <div className="p-8">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;