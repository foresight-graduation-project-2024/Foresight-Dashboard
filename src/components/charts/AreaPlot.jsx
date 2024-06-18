import ReactApexChart from "react-apexcharts";
import PropTypes from "prop-types";

const AreaPlot = ({ seriesName, seriesData, textTitle, labelValues }) => {
  const boxChartData = {
    series: [
      {
        name: seriesName,
        data: seriesData,
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      colors: ['var(--color-primary)'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: textTitle,
        align: "center",
      },
      labels: labelValues,
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: "left",
      },
    },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={boxChartData.options}
          series={boxChartData.series}
          type="area"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

AreaPlot.propTypes = {
  seriesName: PropTypes.string.isRequired,
  seriesData: PropTypes.array.isRequired,
  textTitle: PropTypes.string.isRequired,
  labelValues: PropTypes.array.isRequired,
};

export default AreaPlot;
