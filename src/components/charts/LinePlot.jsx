import ReactApexChart from "react-apexcharts";
import PropTypes from 'prop-types';
import styled from "styled-components";

const Div = styled.div`
  width: 65%;
  margin-bottom: 4.2rem;
`

function LinePlot({ chartData }) {
  return (
    <Div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </Div>
  );
}

LinePlot.propTypes = {
  chartData: PropTypes.object.isRequired,
};

export default LinePlot;
