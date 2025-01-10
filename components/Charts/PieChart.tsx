import { ChartData } from "chart.js";
import { Pie } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale } from 'chart.js';

// Register necessary Chart.js elements
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale);

interface PieChartProps {
  data: ChartData<'pie'>;  // Change this to ChartData<'pie'>
}

export default function PieChart({ data }: PieChartProps) {
  return (
    <div className="w-full max-w-lg mx-auto">
      <Pie data={data} />
    </div>
  );
}
