function GrievanceStatus({ grievances }) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-slate-700">
                Grievance Status
            </h3>

            <ul className="space-y-4">
                {grievances.length > 0 ? grievances.slice(0, 5).map((g, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center border-b border-slate-50 pb-3"
                    >
                        <div className="flex flex-col">
                            <span className="font-semibold text-slate-800 text-sm">{g.subject}</span>
                        </div>
                        <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded 
                            ${g.status === "resolved" ? "bg-green-50 text-green-600" : "bg-orange-50 text-orange-600"}`}>
                            {g.status}
                        </span>
                    </li>
                )) : (
                    <li className="text-center text-slate-400 py-4 text-sm italic">No recent grievances</li>
                )}
            </ul>
        </div>
    );
}

export default GrievanceStatus;