import styled from "styled-components";

import LinePlot from "../components/charts/LinePlot";
import BoxPlot from "../components/charts/BoxPlot";
import imageRelation from "../assets/relation.jpg"

const ImageContainer = styled.div`
  text-align: center;
`

const Img = styled.img`
  width: 949px;
  height: 785px;
`

function HistoricalAnalysis() {
  const TP2Data = {
    seriesData: [0.947143, 1.056724, 1.136294, 1.29923, 1.316357, 1.122155],
    xAxisData: [
      "2022-01-31",
      "2022-02-28",
      "2022-03-31",
      "2022-04-30",
      "2022-05-31",
      "2022-06-30",
    ],
  };

  const TP3Data = {
    seriesData: [8.989071, 8.932889, 8.980022, 8.991801, 8.978387, 8.934446],
    xAxisData: [
      "2022-01-31",
      "2022-02-28",
      "2022-03-31",
      "2022-04-30",
      "2022-05-31",
      "2022-06-30",
    ],
  };

  const H1Data = {
    seriesData: [8.038328, 7.890792, 7.854466, 7.534961, 7.465747, 7.553472],
    xAxisData: [
      "2022-01-31",
      "2022-02-28",
      "2022-03-31",
      "2022-04-30",
      "2022-05-31",
      "2022-06-30",
    ],
  };

  const DVPressureData = {
    seriesData: [
      -0.019723, -0.018822, -0.019159, -0.031814, -0.031956, -0.032329,
    ],
    xAxisData: [
      "2022-01-31",
      "2022-02-28",
      "2022-03-31",
      "2022-04-30",
      "2022-05-31",
      "2022-06-30",
    ],
  };

  const reservoirsData = {
    seriesData: [1.630502, 1.654209, 1.610955, 1.474412, 1.470186, 1.470669],
    xAxisData: [
      "2022-01-31",
      "2022-02-28",
      "2022-03-31",
      "2022-04-30",
      "2022-05-31",
      "2022-06-30",
    ],
  };

  const oilTempData = {
    seriesData: [
      65.843907, 67.048463, 68.441077, 67.775851, 67.566279, 66.317819,
    ],
    xAxisData: [
      "2022-01-31",
      "2022-02-28",
      "2022-03-31",
      "2022-04-30",
      "2022-05-31",
      "2022-06-30",
    ],
  };

  const flowmeterData = {
    seriesData: [
      20.128266, 20.32416, 20.348987, 20.549074, 20.616934, 20.418764,
    ],
    xAxisData: [
      "2022-01-31",
      "2022-02-28",
      "2022-03-31",
      "2022-04-30",
      "2022-05-31",
      "2022-06-30",
    ],
  };

  const motorData = {
    seriesData: [2.040461, 2.156995, 2.33871, 2.665469, 2.699587, 2.315764],
    xAxisData: [
      "2022-01-31",
      "2022-02-28",
      "2022-03-31",
      "2022-04-30",
      "2022-05-31",
      "2022-06-30",
    ],
  };

  const oliFailureData = {
    normalData: [52.200, 58.100, 63.950, 68.150, 75.125],
    failure1Data: [65.975, 75.350, 87.025, 94.925, 97.900],
    failure2Data: [52.550, 56.100, 60.925, 66.625, 69.725],
    failure3Data: [65.975, 75.350, 87.025, 94.925, 97.900],
    textTitle: "Box Plot of Oil_temperature between Normal and Failure Periods",
    xAxisText: "Oil_temperature",
  };

  const reservoirsFailureData = {
    normalData: [1.544, 1.554, 1.566, 1.578, 1.598],
    failure1Data: [1.726, 1.744, 1.776, 1.798, 1.812],
    failure2Data: [1.580, 1.584, 1.584, 1.586, 1.590],
    failure3Data: [1.456, 1.464, 1.468, 1.470, 1.524],
    textTitle: "Box Plot of Reservoirs between Normal and Failure Periods",
    xAxisText: "Reservoirs",
  };

  const TP3FailureData = {
    normalData: [7.914, 8.466, 8.944, 9.452, 10.200],
    failure1Data: [0.006, 0.466, 6.776, 7.056, 10.130],
    failure2Data: [8.034, 8.426, 8.866, 9.444, 10.252],
    failure3Data: [7.438, 8.478, 8.926, 9.430, 10.284],
    textTitle: "Box Plot of TP3 between Normal and Failure Periods",
    xAxisText: "TP3",
  };

  const TP2FailureData = {
    normalData: [-0.028, -0.012, -0.010, -0.010, 10.660],
    failure1Data: [-0.020, -0.002, 6.598, 7.422, 10.538],
    failure2Data: [-0.026, -0.010, -0.008, -0.008, 10.712],
    failure3Data: [-0.028, -0.010, -0.008, -0.008, 10.792],
    textTitle: "Box Plot of TP2 between Normal and Failure Periods",
    xAxisText: "TP2",
  };

  const H1FailureData = {
    normalData: [-0.032, 8.304, 8.822, 9.368, 10.182],
    failure1Data: [-0.016, 0.004, 0.004, 0.006, 10.136],
    failure2Data: [-0.028, 8.302, 8.706, 9.382, 10.248],
    failure3Data: [-0.034, 8.158, 8.566, 9.000, 10.194],
    textTitle: "Box Plot of H1 between Normal and Failure Periods",
    xAxisText: "H1",
  };

  const DVPressureFailureData = {
    normalData: [-0.032, -0.030, -0.030, -0.028, 7.978],
    failure1Data: [-0.028, -0.024, -0.022, -0.020, 5.826],
    failure2Data: [-0.032, -0.028, -0.028, -0.026, 4.736],
    failure3Data: [-0.038, -0.034, -0.032, -0.032, 0.620],
    textTitle: "Box Plot of DV_pressure between Normal and Failure Periods",
    xAxisText: "DV_pressure",
  };

  const flowmeterFailureData = {
    normalData: [18.844062, 18.974875, 19.030938, 19.049625, 35.186281],
    failure1Data: [18.834719, 18.844062, 30.542437, 30.981594, 33.896844],
    failure2Data: [18.853406, 19.012250, 19.049625, 19.049625, 32.149563],
    failure3Data: [18.834719, 19.133719, 19.255188, 19.329937, 33.233438],
    textTitle: "Box Plot of Flowmeter between Normal and Failure Periods",
    xAxisText: "Flowmeter",
  };

  const motorFailureData = {
    normalData: [0.0050, 0.0075, 0.0075, 3.8775, 6.2350],
    failure1Data: [-0.0100, -0.0050, 5.0500, 5.2250, 7.0375],
    failure2Data: [0.0025, 0.0050, 0.0050, 3.8800, 6.2250],
    failure3Data: [-0.0025, 0.0050, 3.6825, 3.8300, 9.0175],
    textTitle: "Box Plot of Motor_current between Normal and Failure Periods",
    xAxisText: "Motor_current",
  };

  return (
    <div>
      {/* <CsvReader /> */}
      <LinePlot
        seriesData={TP2Data.seriesData}
        xAxisData={TP2Data.xAxisData}
        textTitle="Monthly Time Series Plot for TP2 Data"
        seriesName="TP2 Value"
        yAxisName="TP2"
        minV="-0.03"
        maxV="10.88"
        avgV="1.15"
        stdV="3.08"
      />
      <LinePlot
        seriesData={TP3Data.seriesData}
        xAxisData={TP3Data.xAxisData}
        textTitle="Monthly Time Series Plot for TP3 Data"
        seriesName="TP3 Value"
        yAxisName="TP3"
        minV="0.01"
        maxV="10.41"
        avgV="8.97"
        stdV="0.70"
      />
      <LinePlot
        seriesData={H1Data.seriesData}
        xAxisData={H1Data.xAxisData}
        textTitle="Monthly Time Series Plot for H1 Data"
        seriesName="H1 Value"
        yAxisName="H1"
        minV="-0.03"
        maxV="10.41"
        avgV="7.75"
        stdV="3.05"
      />
      <LinePlot
        seriesData={DVPressureData.seriesData}
        xAxisData={DVPressureData.xAxisData}
        yAxisName="DV-Pressure"
        seriesName="DV_Pressure Value"
        textTitle="Monthly Time Series Plot for DVPressure Data"
        minV="-0.04"
        maxV="8.33"
        avgV="-0.02"
        stdV="0.15"
      />
      <LinePlot
        seriesData={reservoirsData.seriesData}
        xAxisData={reservoirsData.xAxisData}
        yAxisName="Reservoirs"
        seriesName="Reservoirs Value"
        textTitle="Monthly Time Series Plot for Reservoir Data"
        minV="1.35"
        maxV="2.05"
        avgV="1.57"
        stdV="0.09"
      />
      <LinePlot
        seriesData={oilTempData.seriesData}
        xAxisData={oilTempData.xAxisData}
        textTitle="Monthly Time Series Plot for Oil Temperature Data"
        seriesName="Oil Temperature Value"
        yAxisName="Oil Temperature"
        minV="13.88"
        maxV="97.90"
        avgV="67.31"
        stdV="5.38"
      />
      <LinePlot
        seriesData={flowmeterData.seriesData}
        xAxisData={flowmeterData.xAxisData}
        yAxisName="Flowmeter"
        seriesName="Flowmeter Value"
        textTitle="Monthly Time Series Plot for Flowmeter Data"
        minV="18.83"
        maxV="43.07"
        avgV="20.40"
        stdV="3.74"
      />
      <LinePlot
        seriesData={motorData.seriesData}
        xAxisData={motorData.xAxisData}
        yAxisName="Motor"
        seriesName="Motor Value"
        textTitle="Monthly Time Series Plot for Motor Data"
        minV="-0.01"
        maxV="9.68"
        avgV="2.38"
        stdV="2.19"
      />

      <BoxPlot
        normalData={oliFailureData.normalData}
        failure1Data={oliFailureData.failure1Data}
        failure2Data={oliFailureData.failure2Data}
        failure3Data={oliFailureData.failure3Data}
        textTitle={oliFailureData.textTitle}
        xAxisText={oliFailureData.xAxisText}
      />
      <BoxPlot
        normalData={reservoirsFailureData.normalData}
        failure1Data={reservoirsFailureData.failure1Data}
        failure2Data={reservoirsFailureData.failure2Data}
        failure3Data={reservoirsFailureData.failure3Data}
        textTitle={reservoirsFailureData.textTitle}
        xAxisText={reservoirsFailureData.xAxisText}
      />
      <BoxPlot
        normalData={TP3FailureData.normalData}
        failure1Data={TP3FailureData.failure1Data}
        failure2Data={TP3FailureData.failure2Data}
        failure3Data={TP3FailureData.failure3Data}
        textTitle={TP3FailureData.textTitle}
        xAxisText={TP3FailureData.xAxisText}
      />
      <BoxPlot
        normalData={TP2FailureData.normalData}
        failure1Data={TP2FailureData.failure1Data}
        failure2Data={TP2FailureData.failure2Data}
        failure3Data={TP2FailureData.failure3Data}
        textTitle={TP2FailureData.textTitle}
        xAxisText={TP2FailureData.xAxisText}
      />
      <BoxPlot
        normalData={H1FailureData.normalData}
        failure1Data={H1FailureData.failure1Data}
        failure2Data={H1FailureData.failure2Data}
        failure3Data={H1FailureData.failure3Data}
        textTitle={H1FailureData.textTitle}
        xAxisText={H1FailureData.xAxisText}
      />
      <BoxPlot
        normalData={DVPressureFailureData.normalData}
        failure1Data={DVPressureFailureData.failure1Data}
        failure2Data={DVPressureFailureData.failure2Data}
        failure3Data={DVPressureFailureData.failure3Data}
        textTitle={DVPressureFailureData.textTitle}
        xAxisText={DVPressureFailureData.xAxisText}
      />
      <BoxPlot
        normalData={flowmeterFailureData.normalData}
        failure1Data={flowmeterFailureData.failure1Data}
        failure2Data={flowmeterFailureData.failure2Data}
        failure3Data={flowmeterFailureData.failure3Data}
        textTitle={flowmeterFailureData.textTitle}
        xAxisText={flowmeterFailureData.xAxisText}
      />
      <BoxPlot
        normalData={motorFailureData.normalData}
        failure1Data={motorFailureData.failure1Data}
        failure2Data={motorFailureData.failure2Data}
        failure3Data={motorFailureData.failure3Data}
        textTitle={motorFailureData.textTitle}
        xAxisText={motorFailureData.xAxisText}
      />

      <ImageContainer>
        <Img src={imageRelation} alt="The relation" />
      </ImageContainer>
    </div>
  );
}

export default HistoricalAnalysis;
