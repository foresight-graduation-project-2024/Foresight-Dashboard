import { useState } from "react";

import LinePlot from "../components/charts/LinePlot";
import BoxPlot from "../components/charts/BoxPlot";

function HistoricalAnalysis() {
  const [reservoirsData] = useState({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Time Series Plot for Reservoirs",
        align: "center",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
        title: {
          text: "Timestamp",
        },
      },
      yaxis: {
        title: {
          text: "Reservoirs",
        },
      },
    },
  });

  const [TP2Data] = useState({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Monthly Time Series Plot for TP2",
        align: "center",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
        title: {
          text: "Month",
        },
      },
      yaxis: {
        title: {
          text: "TP2",
        },
      },
    },
  });

  const [TP3Data] = useState({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Monthly Time Series Plot for TP3",
        align: "center",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
        title: {
          text: "Month",
        },
      },
      yaxis: {
        title: {
          text: "TP3",
        },
      },
    },
  });

  const [H1Data] = useState({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Monthly Time Series Plot for H1",
        align: "center",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
        title: {
          text: "Month",
        },
      },
      yaxis: {
        title: {
          text: "H1",
        },
      },
    },
  });

  const [DVPressureData] = useState({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Monthly Time Series Plot for DV_pressure",
        align: "center",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
        title: {
          text: "Month",
        },
      },
      yaxis: {
        title: {
          text: "DV_pressure",
        },
      },
    },
  });

  const [monthReservoirsData] = useState({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Monthly Time Series Plot for Reservoirs",
        align: "center",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
        title: {
          text: "Month",
        },
      },
      yaxis: {
        title: {
          text: "Reservoirs",
        },
      },
    },
  });

  const [oilTempData] = useState({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Monthly Time Series Plot for Oil_temperature",
        align: "center",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
        title: {
          text: "Month",
        },
      },
      yaxis: {
        title: {
          text: "Oil_temperature",
        },
      },
    },
  });

  const [flowmeterData] = useState({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Monthly Time Series Plot for Flowmeter",
        align: "center",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
        title: {
          text: "Month",
        },
      },
      yaxis: {
        title: {
          text: "Flowmeter",
        },
      },
    },
  });

  const [motorData] = useState({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Monthly Time Series Plot for Motor_current",
        align: "center",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
        title: {
          text: "Month",
        },
      },
      yaxis: {
        title: {
          text: "Motor_current",
        },
      },
    },
  });

  const [oliFailureData] = useState({
    series: [
      {
        type: "boxPlot",
        data: [
          {
            x: "Normal",
            y: [54, 66, 69, 75, 88],
          },
          {
            x: "Failure-1",
            y: [43, 65, 69, 76, 81],
          },
          {
            x: "Failure-2",
            y: [31, 39, 45, 51, 59],
          },
          {
            x: "Failure-3",
            y: [39, 46, 55, 65, 71],
          },
        ],
      },
    ],
    options: {
      chart: {
        type: "boxPlot",
        height: 350,
      },
      title: {
        text: "Box Plot of Oil_temperature between Normal and Failure Periods",
        align: "center",
      },
      plotOptions: {
        boxPlot: {
          colors: {
            upper: "#5C4742",
            lower: "#A5978B",
          },
        },
      },
      xaxis: {
        title: {
          text: "Oil_temperature",
        },
      },
      yaxis: {
        title: {
          text: "Period",
        },
      },
    },
  });

  const [reservoirsFailureData] = useState({
    series: [
      {
        type: "boxPlot",
        data: [
          {
            x: "Normal",
            y: [54, 66, 69, 75, 88],
          },
          {
            x: "Failure-1",
            y: [43, 65, 69, 76, 81],
          },
          {
            x: "Failure-2",
            y: [31, 39, 45, 51, 59],
          },
          {
            x: "Failure-3",
            y: [39, 46, 55, 65, 71],
          },
        ],
      },
    ],
    options: {
      chart: {
        type: "boxPlot",
        height: 350,
      },
      title: {
        text: "Box Plot of Reservoirs between Normal and Failure Periods",
        align: "center",
      },
      plotOptions: {
        boxPlot: {
          colors: {
            upper: "#5C4742",
            lower: "#A5978B",
          },
        },
      },
      xaxis: {
        title: {
          text: "Reservoirs",
        },
      },
      yaxis: {
        title: {
          text: "Period",
        },
      },
    },
  });

  const [TP3FailureData] = useState({
    series: [
      {
        type: "boxPlot",
        data: [
          {
            x: "Normal",
            y: [54, 66, 69, 75, 88],
          },
          {
            x: "Failure-1",
            y: [43, 65, 69, 76, 81],
          },
          {
            x: "Failure-2",
            y: [31, 39, 45, 51, 59],
          },
          {
            x: "Failure-3",
            y: [39, 46, 55, 65, 71],
          },
        ],
      },
    ],
    options: {
      chart: {
        type: "boxPlot",
        height: 350,
      },
      title: {
        text: "Box Plot of TP3 between Normal and Failure Periods",
        align: "center",
      },
      plotOptions: {
        boxPlot: {
          colors: {
            upper: "#5C4742",
            lower: "#A5978B",
          },
        },
      },
      xaxis: {
        title: {
          text: "TP3",
        },
      },
      yaxis: {
        title: {
          text: "Period",
        },
      },
    },
  });

  return (
    <div>
      <LinePlot chartData={reservoirsData} />
      <LinePlot chartData={TP2Data} />
      <LinePlot chartData={TP3Data} />
      <LinePlot chartData={H1Data} />
      <LinePlot chartData={DVPressureData} />
      <LinePlot chartData={monthReservoirsData} />
      <LinePlot chartData={oilTempData} />
      <LinePlot chartData={flowmeterData} />
      <LinePlot chartData={motorData} />
      <BoxPlot chartData={oliFailureData} />
      <BoxPlot chartData={reservoirsFailureData} />
      <BoxPlot chartData={TP3FailureData} />
    </div>
  );
}

export default HistoricalAnalysis;
