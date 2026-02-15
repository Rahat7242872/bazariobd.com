"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CategoryPieChart({ demoCategorySales }) {
  if (!demoCategorySales || demoCategorySales.length === 0) {
    return <p className="text-center text-red-500">No data available!</p>;
  }

  const data = {
    labels: demoCategorySales.map((item) => item.category),
    datasets: [
      {
        label: "Category Sales",
        data: demoCategorySales.map((item) => item.sales),
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-5 rounded-2xl shadow">
      <h2 className="text-xl font-semibold text-slate-700 mb-4 text-center">
        Category Sales
      </h2>
      <Pie data={data} />
    </div>
  );
}
