import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
import "./OverallStatsChart.css"; // Import external CSS

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

// Mock Data for Overall Reading Stats
const bookStats = {
  totalBooksRead: 50,
  totalPagesRead: 12_000,
  avgPagesPerBook: 240,
  booksPerMonth: [2, 3, 5, 4, 6, 7, 8, 6, 4, 3, 5, 7],
  pagesPerMonth: [400, 600, 1000, 800, 1200, 1400, 1600, 1200, 800, 600, 1000, 1400],
  genreDistribution: {
    Fiction: 25,
    NonFiction: 10,
    Mystery: 5,
    Fantasy: 8,
    Science: 2,
  },
};

// Bar Chart Data (Books Read Per Month)
const booksPerMonthData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Books Read",
      data: bookStats.booksPerMonth,
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
      textColor: "white",
    },
  ],
};

// Line Chart Data (Pages Read Per Month)
const pagesPerMonthData = {
  labels: booksPerMonthData.labels,
  datasets: [
    {
      label: "Pages Read",
      data: bookStats.pagesPerMonth,
      fill: false,
      borderColor: "#ff6384",
      tension: 0.2,
    },
  ],
};


// Pie Chart Data (Genre Distribution)
const genreDistributionData = {
  labels: Object.keys(bookStats.genreDistribution),
  datasets: [
    {
      label: "Books Read",
      data: Object.values(bookStats.genreDistribution),
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
      labels: {
        color: "#fbfbfb", // Legend text color
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
    title: {
      display: true,
      text: "Books Read Per Month 📚",
      font: {
        size: 18,
        weight: "bold",
      },
      color: "#444",
    },
    tooltip: {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      titleColor: "#0b0b0b",
      bodyColor: "#0b0b0b",
      borderColor: "#fff",
      borderWidth: 1,
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Hide grid lines on X-axis
      },
      ticks: {
        color: "#444",
        font: {
          size: 12,
        },
      },
    },
    y: {
      grid: {
        color: "rgba(200, 200, 200, 0.3)", // Soft gray grid lines
        borderDash: [5, 5], // Dashed lines
      },
      ticks: {
        color: "#444",
        font: {
          size: 12,
        },
      },
    },
  },
};

const OverallStatsChart = () => {
  return (
    <div className="overall-stats-container">
      <h2 className="heading">📊 Overall Reading Stats</h2>
      <div className="grid-container">
        {/* Bar Chart */}
        <div className="chart-card">
          <h3 className="chart-title">Books Read Per Month</h3>
          <Bar data={booksPerMonthData} options={options}/>
        </div>

        {/* Line Chart */}
        <div className="chart-card">
          <h3 className="chart-title">Pages Read Per Month</h3>
          <Line data={pagesPerMonthData} />
        </div>

        {/* Pie Chart */}
        <div className="chart-card">
          <h3 className="chart-title">Genre Distribution</h3>
          <Pie data={genreDistributionData} />
        </div>
      </div>
    </div>
  );
};

export default OverallStatsChart;
