// src/components/RevenueChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, Filler } from 'chart.js';

// Register the required chart components including the Filler plugin
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, Filler);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Revenue ($)',
      data: [1500, 2000, 1800, 2200, 2500],
      fill: true, // Enables the "fill" option
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `$${tooltipItem.raw.toFixed(2)}`, // Format the tooltip labels
      },
    },
  },
};

export default function RevenueChart() {
  return <Line data={data} options={options} />;
}
