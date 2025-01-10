import { useEffect, useState } from "react";
import { ApiResponse, ReportData, ChartData } from "@/types";

// const generateRandomColor = () => {
//     // Generate a random RGB color
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgba(${r}, ${g}, ${b}, 0.6)`;
// };

export default function useCovidData() {
    const [confirmedChartData, setConfirmedChartData] = useState<ChartData>({
        labels: [],
        datasets: [],
    });
    const [deathsChartData, setDeathsChartData] = useState<ChartData>({
        labels: [],
        datasets: [],
    });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://covid-api.com/api/reports?iso=USA");
                const result: ApiResponse = await response.json();

                console.log("Data", result);

                const stateCases: Record<string, number> = {};
                const stateDeaths: Record<string, number> = {};
                const labelsSet = new Set<string>();

                result.data.forEach((report: ReportData) => {
                    const state = report.region.province;
                    labelsSet.add(state);

                    stateCases[state] = (stateCases[state] || 0) + report.confirmed;
                    stateDeaths[state] = (stateDeaths[state] || 0) + report.deaths;
                });

                const labels = Array.from(labelsSet);


                setConfirmedChartData({
                    labels,
                    datasets: [
                        {
                            label: "Confirmed Cases",
                            data: Object.values(stateCases),
                            borderColor: "rgb(75, 192, 192)",
                            backgroundColor: "rgba(75, 192, 192, 0.6)",
                            fill: true,
                        },
                    ],
                },
                );

                setDeathsChartData({
                    labels,
                    datasets: [
                        {
                            label: "Deaths",
                            data: Object.values(stateDeaths),
                            borderColor: "rgb(255, 99, 132)",
                            backgroundColor: "rgba(255, 99, 132, 0.6)",
                            fill: true,
                        },
                    ],
                });


                setLoading(false);
            } catch (err) {
                setError("Failed to fetch data");
                setLoading(false);
                console.error(err);
            }
        };

        fetchData();
    }, []);

    return { confirmedChartData, deathsChartData, loading, error };
}
