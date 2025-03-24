// src/components/PieChart.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components for Pie chart
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['North', 'South', 'East', 'West'],
  datasets: [
    {
      label: 'Sales by Region',
      data: [300, 400, 500, 600],
      backgroundColor: [
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)',
      ],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `$${tooltipItem.raw.toFixed(2)}`, // Format the tooltip labels
      },
    },
  },
};

export default function PieChart() {
  return <Pie data={data} options={options} />;
}
