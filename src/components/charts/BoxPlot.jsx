import ReactApexChart from "react-apexcharts";
import PropTypes from "prop-types";
import styled from "styled-components";

const Div = styled.div`
  margin-bottom: 4.2rem;
`;

const BoxPlot = ({
  normalData,
  failure1Data,
  failure2Data,
  failure3Data,
  textTitle,
  xAxisText,
}) => {
  const boxChartData = {
    series: [
      {
        type: "boxPlot",
        data: [
          {
            x: "Normal",
            y: normalData,
          },
          {
            x: "Failure-1",
            y: failure1Data,
          },
          {
            x: "Failure-2",
            y: failure2Data,
          },
          {
            x: "Failure-3",
            y: failure3Data,
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
        text: textTitle,
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
          text: xAxisText,
        },
      },
      yaxis: {
        title: {
          text: "Period",
        },
      },
    },
  };

  return (
    <Div>
      <div id="chart">
        <ReactApexChart
          options={boxChartData.options}
          series={boxChartData.series}
          type="boxPlot"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </Div>
  );
};

BoxPlot.propTypes = {
  normalData: PropTypes.array.isRequired,
  failure1Data: PropTypes.array.isRequired,
  failure2Data: PropTypes.array.isRequired,
  failure3Data: PropTypes.array.isRequired,
  textTitle: PropTypes.string.isRequired,
  xAxisText: PropTypes.string.isRequired,
};

export default BoxPlot;
