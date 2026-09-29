import React from "react";
import useTotalCovidData from "@/hooks/useTotalCovidData"; // Import your hook here
import PieChart from "./Charts/PieChart";

const TotalCovidStats = () => {
  const { covidData, loading, error } = useTotalCovidData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Global COVID-19 Stats</h2>
      {covidData && <PieChart data={covidData} />}
    </div>
  );
};

export default TotalCovidStats;
