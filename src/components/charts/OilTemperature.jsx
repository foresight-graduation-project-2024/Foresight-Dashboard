import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const OilTemperature = () => {
  const [chartData] = useState({
    series: [
      {
        type: 'boxPlot',
        data: [
          {
            x: 'Jan 2015',
            y: [54, 66, 69, 75, 88]
          },
          {
            x: 'Jan 2016',
            y: [43, 65, 69, 76, 81]
          },
          {
            x: 'Jan 2017',
            y: [31, 39, 45, 51, 59]
          },
          {
            x: 'Jan 2018',
            y: [39, 46, 55, 65, 71]
          },
          {
            x: 'Jan 2019',
            y: [29, 31, 35, 39, 44]
          },
          {
            x: 'Jan 2020',
            y: [41, 49, 58, 61, 67]
          },
          {
            x: 'Jan 2021',
            y: [54, 59, 66, 71, 88]
          }
        ]
      }
    ],
    options: {
      chart: {
        type: 'boxPlot',
        height: 350
      },
      title: {
        text: 'Basic BoxPlot Chart',
        align: 'left'
      },
      plotOptions: {
        boxPlot: {
          colors: {
            upper: '#5C4742',
            lower: '#A5978B'
          }
        }
      }
    }
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="boxPlot" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default OilTemperature;