import {
    CategoryScale,
    Chart,
    ChartData,
    ChartOptions,
    Filler,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import { BsThreeDots } from "react-icons/bs";

Chart.register(
    CategoryScale,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const options: ChartOptions<"line"> = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                display: false,
            },
        },
        x: {
            grid: {
                display: false,
            },
        },
    },
};

const data: ChartData<"line"> = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
        {
            label: "Tasks",
            data: [33, 53, 85, 41, 44, 65, 25],
            fill: true,
            backgroundColor: "transparent",
            borderColor: "#3b5ac7",
            pointStyle: "circle",
            tension: 0.4,
            pointBorderColor: "transparent",
            pointHoverBackgroundColor: "#3b5ac7",
            pointHoverBorderColor: "#3b5ac7",
            pointHoverBorderWidth: 2,
            pointBorderWidth: 2,
            pointRadius: 0,
            pointHitRadius: 10,
            borderWidth: 2,
        },
    ],
};
const WeeklyActivityChart: React.FC = () => {
    return (
        <div className="w-full p-4 bg-white rounded-2xl">
            <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-medium font-title text-gray-700">
                    Weekly Activity
                </h4>
                <button>
                    <BsThreeDots className="w-4 h-4 text-gray-500" />
                </button>
            </div>
            <div className="w-full h-60">
                <Line options={options} data={data} className="w-full h-full" />
            </div>
        </div>
    );
};

export default WeeklyActivityChart;
