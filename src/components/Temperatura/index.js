import React from "react";
import ReactApexChart from "react-apexcharts";

const Temperatura = () => {
  const myData = {
    labels: {
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
    },
    series: [
      {
        name: "°C",
        data: [
          50.6, 49.4, 53.9, 57.2, 54.1, 46.8, 51.3, 61.3, 58.4, 55.7, 54.5,
          63.9, 46.9, 41, 57.3,
        ],
      },
    ],
  };

  const options = {
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: "50%",
      },
    },
    chart: {
      background: "transparent",
      foreColor: "#fafafa",
    },
    dataLabels: {
      enabled: true,
    },
    background: {
      enabled: true,
      foreColor: "#3777FF",
      padding: 4,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: "#3777FF",
      opacity: 0.9,
      dropShadow: {
        enabled: false,
        top: 1,
        left: 1,
        blur: 1,
        color: "#000",
        opacity: 0.45,
      },
    },
    stroke: {
      width: 2,
    },
    yaxis: {
      title: {
        text: "Temperatura",
      },
    },
    title: {
      text: "Temperatura da Máquina ºC",
      align: "center",
    },
    subtitle: {
      text: `13 Registros`,
      align: "center",
    },
    fill: {
      type: "gradient",
      colors: ["#3777FF"],
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8,
      },
    },
    xaxis: {
      categories: myData.labels.categories,
      labels: {
        style: {
          colors: "#fafafa",
        },
      },
    },
  };

  return (
    <>
      <h1 className="temperature">Temperatura</h1>

      <ReactApexChart
        options={{ ...options }}
        series={myData.series}
        type="bar"
        height="450"
      />
    </>
  );
};

export default Temperatura;
