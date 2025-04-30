'use client'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import React from 'react';

// Registrar componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface GeneralChartProps {
  data: {
    ganancia: number;
    prestado: number;
    capital: number;
    interes: number;
    interesMora: number;
  };
}

export const GeneralChart: React.FC<GeneralChartProps> = ({ data }) => {
  const chartData = {
    labels: ['Ganancia', 'Prestado', 'Capital', 'Interés', 'Interés por mora'],
    datasets: [
      {
        label: 'Monto ($)',
        data: [
          data.ganancia,
          data.prestado,
          data.capital,
          data.interes,
          data.interesMora
        ],
        backgroundColor: [
          '#1A3B5D', // Ganancia
          '#FFA500', // Prestado
          '#4CAF50', // Capital
          '#3B82F6', // Interés
          '#EF4444'  // Mora
        ],
        borderRadius: 8,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: 'Resumen Financiero' }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: any) => `$${value}`
        }
      }
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-white rounded-xl shadow">
      <Bar data={chartData} options={options} />
    </div>
  );
};