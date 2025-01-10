import { useEffect, useState } from "react";
import { ChartData } from "chart.js"; // Import ChartData type from chart.js

// Define the structure for the API response
interface TotalCovidData {
  data: {
    confirmed: number;
    deaths: number;
    active: number;
    recovered: number;
    fatality_rate: number;
  };
}

export default function useTotalCovidData() {
  const [covidData, setCovidData] = useState<ChartData<'pie'> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://covid-api.com/api/reports/total");
        const result: TotalCovidData = await response.json();

        console.log("Total COVID Data", result);

        // Prepare the data for Pie Chart
        const chartData: ChartData<'pie'> = {
          labels: ["Confirmed", "Deaths", "Active", "Recovered"],
          datasets: [
            {
              label: "COVID-19 Stats",
              data: [
                result.data.confirmed,
                result.data.deaths,
                result.data.active,
                result.data.recovered,
              ],
              backgroundColor: [
                "rgba(75, 192, 192, 0.6)", // Confirmed
                "rgba(255, 99, 132, 0.6)", // Deaths
                "rgba(255, 159, 64, 0.6)", // Active
                "rgba(153, 102, 255, 0.6)", // Recovered
              ],
              borderColor: [
                "rgba(75, 192, 192, 1)", // Confirmed
                "rgba(255, 99, 132, 1)", // Deaths
                "rgba(255, 159, 64, 1)", // Active
                "rgba(153, 102, 255, 1)", // Recovered
              ],
              // fill: true, // Enable filling under the pie chart
            },
          ],
        };

        setCovidData(chartData);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return { covidData, loading, error };
}
