import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  PointElement,
  BarController,
  LineController,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

// Register ChartJS components
ChartJS.register(
  BarElement,
  LineElement,
  PointElement,
  BarController,
  LineController,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const Sidebar = ({ setView, activeView }) => {
  const menuItems = [
    { id: "add", label: "Add Child", icon: "➕" },
    { id: "track", label: "Track Children", icon: "👶" },
    { id: "analytics", label: "Analytics", icon: "📊" },
  ];

  return (
    <aside className="w-full md:w-64 bg-gray-900 text-white p-4 md:p-6">
      <div className="mb-8 flex flex-col items-center relative">
        <div className="relative group">
          <img
            src="https://via.placeholder.com/80"
            alt="Organization Logo"
            className="w-20 h-20 rounded-full object-cover border-2 border-orange-400 mb-3"
          />
          <button
            className="absolute bottom-4 right-0 bg-gray-700 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => console.log("Edit organization details")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
        </div>
        <h2 className="text-xl font-bold text-center">OrphanCare Foundation</h2>
        <p className="text-gray-400 text-sm text-center">Management System</p>
      </div>

      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setView(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeView === item.id
                    ? "bg-orange-500 text-white"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

const AnalyticsDashboard = () => {
  // Sample data for charts
  const orphanData = {
    registered: 124,
    adopted: 87,
    available: 37,
  };

  const adoptionRequests = {
    total: 64,
    approved: 42,
    pending: 22,
  };

  const monthlyRegistrations = [12, 19, 15, 8, 12, 15, 18, 10, 14, 9, 11, 13];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const yearlyTrend = [85, 92, 78, 101, 115, 98, 124];
  const years = ["2016", "2017", "2018", "2019", "2020", "2021", "2022"];

  // Chart data configurations
  const orphansChartData = {
    labels: ["Adopted", "Available"],
    datasets: [
      {
        data: [orphanData.adopted, orphanData.available],
        backgroundColor: ["#10B981", "#3B82F6"],
        hoverBackgroundColor: ["#059669", "#2563EB"],
      },
    ],
  };

  const adoptionChartData = {
    labels: ["Approved", "Pending"],
    datasets: [
      {
        data: [adoptionRequests.approved, adoptionRequests.pending],
        backgroundColor: ["#10B981", "#F59E0B"],
        hoverBackgroundColor: ["#059669", "#D97706"],
      },
    ],
  };

  const monthlyChartData = {
    labels: months,
    datasets: [
      {
        label: "Registrations",
        data: monthlyRegistrations,
        backgroundColor: "#F97316",
        hoverBackgroundColor: "#EA580C",
      },
    ],
  };

  const yearlyChartData = {
    labels: years,
    datasets: [
      {
        label: "Orphans Registered",
        data: yearlyTrend,
        borderColor: "#10B981",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        pointBackgroundColor: "#10B981",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  // Chart options
  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" },
      tooltip: {
        callbacks: {
          label: (context) => {
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const value = context.raw;
            const percentage = Math.round((value / total) * 100);
            return `${context.label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: { y: { beginAtZero: true } },
    plugins: { legend: { display: false } },
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: "top" } },
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Organization Analytics
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard
          title="Total Orphans"
          value={orphanData.registered}
          color="orange"
        />
        <StatCard
          title="Adoption Requests"
          value={adoptionRequests.total}
          color="purple"
        />
        <StatCard
          title="Adoption Rate"
          value={`${Math.round(
            (orphanData.adopted / orphanData.registered) * 100
          )}%`}
          color="green"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartCard title="Orphans Status">
          <Bar data={orphansChartData} options={pieOptions} />
        </ChartCard>
        <ChartCard title="Adoption Requests Status">
          <Bar data={adoptionChartData} options={pieOptions} />
        </ChartCard>
        <ChartCard title="Monthly Registrations">
          <Bar data={monthlyChartData} options={barOptions} />
        </ChartCard>
        <ChartCard title="Yearly Growth">
          <Line data={yearlyChartData} options={lineOptions} />
        </ChartCard>
      </div>
    </div>
  );
};

// Reusable Stat Card Component
const StatCard = ({ title, value, color }) => {
  const colors = {
    orange: "text-orange-500",
    purple: "text-purple-500",
    green: "text-green-500",
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className={`text-3xl font-bold ${colors[color]}`}>{value}</p>
    </div>
  );
};

// Reusable Chart Card Component
const ChartCard = ({ title, children }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="font-semibold mb-3">{title}</h3>
    <div className="h-64">{children}</div>
  </div>
);

export { Sidebar, AnalyticsDashboard };
// 