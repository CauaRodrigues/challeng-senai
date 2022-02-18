import React from "react";
import ReactApexChart from "react-apexcharts";

const chartOptions = {
  series: [
    {
      name: "mm / s",
      data: [
        2.13, 1.23, 0.33, 0.61, 0.82, 1.54, 3.54, 4.98, 4.32, 3.21, 2.79, 3.02,
        4, 4.76,
      ],
    },
  ],

  options: {
    chart: {
      type: "area",
      background: "tranparent",
      stacked: true,
      zoom: { type: "x", enabled: true, autoScaleYaxis: true },
      toolbar: { autoSelected: "zoom" },
      foreColor: "#fafafa",
    },
    stroke: {
      curve: "stepline",
      colors: ["#7582eb"],
    },
    dataLabels: {
      enabled: true,
    },
    xaxis: {
      categories: [
        "8/2/22 - 14:46",
        "8/2/22 - 14:47",
        "8/2/22 - 14:48",
        "8/2/22 - 14:49",
        "8/2/22 - 14:50",
        "8/2/22 - 14:51",
        "8/2/22 - 14:52",
        "8/2/22 - 14:53",
        "8/2/22 - 14:54",
        "8/2/22 - 14:55",
        "8/2/22 - 14:56",
        "8/2/22 - 14:57",
        "8/2/22 - 14:58",
        "8/2/22 - 14:59",
        "8/2/22 - 15:00",
      ],
      labels: {
        style: {
          colors: "#fafafa",
        },
      },
    },
    legend: {
      position: "top",
    },
    grid: {
      show: true,
      borderColor: "#444",
    },
    colors: ["#7582eb"],
  },
};

const Avanco = () => {
  return (
    <>
      <h1 className="avance">Avanço</h1>

      <ReactApexChart
        options={chartOptions.options}
        series={chartOptions.series}
        type="area"
        height="450"
      />
    </>
  );
};

export default Avanco;
