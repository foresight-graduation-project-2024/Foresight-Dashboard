import ReactApexChart from "react-apexcharts";
import PropTypes from "prop-types";
import styled from "styled-components";
import StatusCard from "./StatusCard";

const Container = styled.div`
  display: flex;
  gap: 4.8rem;
  margin-bottom: 4.2rem;
`;

const DivCard = styled.div`
  display: flex;
  flex-direction: column;
`

const H1 = styled.h1`
  text-align: center;
`

const Cards = styled.div`
  width: 30%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

function LinePlot({
  seriesData,
  xAxisData,
  yAxisName,
  textTitle,
  minV,
  maxV,
  avgV,
  stdV,
  hideCard,
}) {
  const lineChartData = {
    series: [
      {
        name: `${yAxisName} Value`,
        data: seriesData,
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
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent",
          ],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: xAxisData || [
          "2021-12-31",
          "2022-01-31",
          "2022-02-28",
          "2022-03-31",
          "2022-04-30",
        ],
        title: {
          text: "Timestamp",
        },
      },
      yaxis: {
        title: {
          text: yAxisName,
        },
      },
    },
  };

  return (
    <Container>
      <div style={{ width: hideCard ? "100%" : "65%" }}>
        <div id="chart">
          <ReactApexChart
            options={lineChartData.options}
            series={lineChartData.series}
            type="line"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </div>
      {!hideCard && (
        <DivCard>
          <H1>{yAxisName}</H1>
          <Cards>
            <StatusCard title="Minimum" value={minV} />
            <StatusCard title="Maximum" value={maxV} />
            <StatusCard title="Average" value={avgV} />
            <StatusCard title="Standard division" value={stdV} />
          </Cards>
        </DivCard>
      )}
    </Container>
  );
}

LinePlot.propTypes = {
  seriesData: PropTypes.array.isRequired,
  xAxisData: PropTypes.array,
  yAxisName: PropTypes.string.isRequired,
  textTitle: PropTypes.string.isRequired,
  minV: PropTypes.string,
  maxV: PropTypes.string,
  avgV: PropTypes.string,
  stdV: PropTypes.string,
  hideCard: PropTypes.bool,
};

export default LinePlot;
