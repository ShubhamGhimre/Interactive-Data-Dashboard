"use client";
import React from "react";
import LineChart from "@/components/Charts/LineChart";
import useCovidData from "@/hooks/useCovidData";
import TotalCovidStats from "@/components/TotalCovidData";

export default function Home() {
  const { confirmedChartData, deathsChartData, loading, error } =
    useCovidData();
    

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-xl text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-6  space-y-8">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        COVID-19 Statistics by State (USA)
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Confirmed Cases Chart */}
        <div className=" p-6  hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Confirmed Cases Per State</h2>
          <div className="w-full h-full">
            <LineChart data={confirmedChartData} />
          </div>
        </div>

        <TotalCovidStats  />

        {/* Deaths Chart */}
        <div className=" p-6  hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Deaths Per state</h2>
          <div className="w-full h-full">
            <LineChart data={deathsChartData} />
          </div>
        </div>
      </div>
    </div>
  );
}
