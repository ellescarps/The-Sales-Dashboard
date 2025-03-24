// src/components/BarChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components for the Bar chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Sales ($)',
      data: [500, 700, 600, 800, 1000],
      backgroundColor: 'rgba(75, 192, 192, 0.6)', // Set bar color
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

export default function BarChart() {
  return <Bar data={data} options={options} />;
}
