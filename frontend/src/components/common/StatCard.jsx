import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

function StatCard({ title, value }) {
    return (
        <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-6 rounded-2xl shadow-md 
                    hover:shadow-xl transition duration-300 transform hover:-translate-y-1">

            <div className="flex justify-between items-center">
                <p className="text-sm opacity-80">{title}</p>
                <ArrowTrendingUpIcon className="w-6 h-6 opacity-80" />
            </div>

            <h2 className="text-3xl font-bold mt-3">{value}</h2>
        </div>
    );
}

export default StatCard;