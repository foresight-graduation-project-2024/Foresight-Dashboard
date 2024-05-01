import ReactApexChart from "react-apexcharts";
import PropTypes from "prop-types";
import styled from "styled-components";

const Div = styled.div`
  margin-bottom: 4.2rem;
`

const BoxPlot = ({ chartData }) => {
  return (
    <Div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="boxPlot"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </Div>
  );
};

BoxPlot.propTypes = {
  chartData: PropTypes.object.isRequired,
};

export default BoxPlot;
