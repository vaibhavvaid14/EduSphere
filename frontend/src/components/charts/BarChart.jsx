import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function BarChart({ labels, dataValues, title }) {
    const data = {
        labels,
        datasets: [
            {
                label: title,
                data: dataValues,
                backgroundColor: "#6366f1",
                borderRadius: 8,
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            maintainAspectRatio: false,
        },
    };

    return <div className="h-90">
        <Bar data={data} options={options} />
    </div>
}

export default BarChart;