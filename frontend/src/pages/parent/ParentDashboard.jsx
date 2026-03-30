import DashboardLayout from "../../components/layout/DashboardLayout";
import WelcomeBanner from "../../components/common/WelcomeBanner";
import StatCard from "../../components/common/StatCard";
import { useState, useEffect } from "react";
import NoticeWidget from "../../components/common/NoticeWidget";
import EventWidget from "../../components/common/EventWidget";
import { useAuth } from "../../context/AuthContext";
import { getParentDashboardStats } from "../../services/parentService";

function ParentDashboard() {
    const { user } = useAuth();
    const [stats, setStats] = useState({
        wardAttendance: "0%",
        pendingGatepasses: 0,
        pendingFees: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            if (!user?.student) return;
            try {
                const data = await getParentDashboardStats(user.student);
                setStats(data);
            } catch (error) {
                console.error("Failed to fetch parent dashboard stats:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, [user]);

    return (
        <DashboardLayout>
            <div className="space-y-8 animate-fadeIn p-4 sm:p-8">
                <WelcomeBanner role="Parent" />

                {/* KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <StatCard 
                        title="Ward Attendance" 
                        value={loading ? "..." : stats.wardAttendance} 
                        bgColor="bg-blue-50"
                        textColor="text-blue-600"
                    />
                    <StatCard 
                        title="Pending Gatepass" 
                        value={loading ? "..." : stats.pendingGatepasses} 
                        bgColor="bg-yellow-50"
                        textColor="text-yellow-600"
                    />
                    <StatCard 
                        title="Pending Fees" 
                        value={loading ? "..." : stats.pendingFees} 
                        bgColor="bg-red-50"
                        textColor="text-red-600"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <NoticeWidget />
                    <EventWidget />
                </div>
                
                {/* Information Section */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                    <h2 className="text-lg font-semibold mb-2 dark:text-white">
                        Ward Monitor
                    </h2>
                    <p className="text-sm text-slate-500 mb-4">
                        Quick overview of your ward's current status and pending actions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 flex justify-between items-center">
                            <span className="text-slate-600 dark:text-slate-300">Attendance Status</span>
                            <span className={`font-bold ${parseInt(stats.wardAttendance) < 75 ? 'text-red-500' : 'text-emerald-500'}`}>
                                {parseInt(stats.wardAttendance) < 75 ? 'Low' : 'Good'}
                            </span>
                        </div>
                        <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 flex justify-between items-center">
                            <span className="text-slate-600 dark:text-slate-300">Fee Status</span>
                            <span className={`font-bold ${stats.pendingFees > 0 ? 'text-orange-500' : 'text-emerald-500'}`}>
                                {stats.pendingFees > 0 ? 'Pending' : 'Cleared'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default ParentDashboard;