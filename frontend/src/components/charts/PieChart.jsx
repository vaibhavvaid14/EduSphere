import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ labels, dataValues }) {
    const data = {
        labels,
        datasets: [
            {
                data: dataValues,
                backgroundColor: [
                    "#6366f1",  // indigo
                    "#3b82f6",  // blue
                    "#10b981",  // green
                ],
                borderWidth: 0,
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom",
            },
        },
    };

    return <div className="w-full max-w-3xl mx-auto h-64 sm:h-80">
        <Pie data={data} options={options} />;
        </div>
}

export default PieChart;