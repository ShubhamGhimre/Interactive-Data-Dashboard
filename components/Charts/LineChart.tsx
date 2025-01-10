import React from "react";
import { Line } from "react-chartjs-2";
import { ChartData } from "@/types";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
); // Ensure all required elements are registered

interface LineChartProps {
  data: ChartData;
}

export default function LineChart({ data }: LineChartProps) {
  return (
    <div className="">
      <Line data={data} />
    </div>
  );
}
