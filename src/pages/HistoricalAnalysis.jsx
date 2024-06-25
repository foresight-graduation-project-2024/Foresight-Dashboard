import { lazy, Suspense } from "react";
import styled from "styled-components";

const LinePlot = lazy(() => import("../components/charts/LinePlot"));
const BoxPlot = lazy(() => import("../components/charts/BoxPlot"));
import imageRelation from "../assets/relation.webp";

const ImageContainer = styled.div`
  text-align: center;
`;

const Img = styled.img`
  width: 949px;
  height: 785px;
`;

function HistoricalAnalysis() {
  const TP2Data = [0.947143, 1.056724, 1.136294, 1.29923, 1.33104];

  const TP3Data = [8.989071, 8.932889, 8.980022, 8.991801, 8.979303];

  const H1Data = [8.038328, 7.890792, 7.854466, 7.534961, 7.452888];

  const DVPressureData = [
    -0.019723, -0.018822, -0.019159, -0.031814, -0.031934,
  ];

  const reservoirsData = [1.630502, 1.654209, 1.610955, 1.474412, 1.47025];

  const oilTempData = [65.843907, 67.048463, 68.441077, 67.775851, 67.663433];

  const flowmeterData = [20.128266, 20.32416, 20.348987, 20.549074, 20.631989];

  const motorData = [2.040461, 2.156995, 2.33871, 2.665469, 2.723441];

  const oliFailureData = {
    normalData: [52.2, 58.1, 63.95, 68.15, 75.125],
    failure1Data: [65.975, 75.35, 87.025, 94.925, 97.9],
    failure2Data: [52.55, 56.1, 60.925, 66.625, 69.725],
    failure3Data: [65.975, 75.35, 87.025, 94.925, 97.9],
    textTitle: "Box Plot of Oil_temperature between Normal and Failure Periods",
    xAxisText: "Oil_temperature",
  };

  const reservoirsFailureData = {
    normalData: [1.544, 1.554, 1.566, 1.578, 1.598],
    failure1Data: [1.726, 1.744, 1.776, 1.798, 1.812],
    failure2Data: [1.58, 1.584, 1.584, 1.586, 1.59],
    failure3Data: [1.456, 1.464, 1.468, 1.47, 1.524],
    textTitle: "Box Plot of Reservoirs between Normal and Failure Periods",
    xAxisText: "Reservoirs",
  };

  const TP3FailureData = {
    normalData: [7.914, 8.466, 8.944, 9.452, 10.2],
    failure1Data: [0.006, 0.466, 6.776, 7.056, 10.13],
    failure2Data: [8.034, 8.426, 8.866, 9.444, 10.252],
    failure3Data: [7.438, 8.478, 8.926, 9.43, 10.284],
    textTitle: "Box Plot of TP3 between Normal and Failure Periods",
    xAxisText: "TP3",
  };

  const TP2FailureData = {
    normalData: [-0.028, -0.012, -0.01, -0.01, 10.66],
    failure1Data: [-0.02, -0.002, 6.598, 7.422, 10.538],
    failure2Data: [-0.026, -0.01, -0.008, -0.008, 10.712],
    failure3Data: [-0.028, -0.01, -0.008, -0.008, 10.792],
    textTitle: "Box Plot of TP2 between Normal and Failure Periods",
    xAxisText: "TP2",
  };

  const H1FailureData = {
    normalData: [-0.032, 8.304, 8.822, 9.368, 10.182],
    failure1Data: [-0.016, 0.004, 0.004, 0.006, 10.136],
    failure2Data: [-0.028, 8.302, 8.706, 9.382, 10.248],
    failure3Data: [-0.034, 8.158, 8.566, 9.0, 10.194],
    textTitle: "Box Plot of H1 between Normal and Failure Periods",
    xAxisText: "H1",
  };

  const DVPressureFailureData = {
    normalData: [-0.032, -0.03, -0.03, -0.028, 7.978],
    failure1Data: [-0.028, -0.024, -0.022, -0.02, 5.826],
    failure2Data: [-0.032, -0.028, -0.028, -0.026, 4.736],
    failure3Data: [-0.038, -0.034, -0.032, -0.032, 0.62],
    textTitle: "Box Plot of DV_pressure between Normal and Failure Periods",
    xAxisText: "DV_pressure",
  };

  const flowmeterFailureData = {
    normalData: [18.844062, 18.974875, 19.030938, 19.049625, 35.186281],
    failure1Data: [18.834719, 18.844062, 30.542437, 30.981594, 33.896844],
    failure2Data: [18.853406, 19.01225, 19.049625, 19.049625, 32.149563],
    failure3Data: [18.834719, 19.133719, 19.255188, 19.329937, 33.233438],
    textTitle: "Box Plot of Flowmeter between Normal and Failure Periods",
    xAxisText: "Flowmeter",
  };

  const motorFailureData = {
    normalData: [0.005, 0.0075, 0.0075, 3.8775, 6.235],
    failure1Data: [-0.01, -0.005, 5.05, 5.225, 7.0375],
    failure2Data: [0.0025, 0.005, 0.005, 3.88, 6.225],
    failure3Data: [-0.0025, 0.005, 3.6825, 3.83, 9.0175],
    textTitle: "Box Plot of Motor_current between Normal and Failure Periods",
    xAxisText: "Motor_current",
  };

  return (
    <Suspense fallback={<div>Loading charts...</div>}>
      <LinePlot
        seriesData={TP2Data}
        textTitle="Monthly Time Series Plot for TP2 Data"
        yAxisName="TP2"
        minV="-0.03"
        maxV="10.88"
        avgV="1.15"
        stdV="3.08"
      />
      <LinePlot
        seriesData={TP3Data}
        textTitle="Monthly Time Series Plot for TP3 Data"
        yAxisName="TP3"
        minV="0.01"
        maxV="10.41"
        avgV="8.97"
        stdV="0.70"
      />
      <LinePlot
        seriesData={H1Data}
        textTitle="Monthly Time Series Plot for H1 Data"
        yAxisName="H1"
        minV="-0.03"
        maxV="10.41"
        avgV="7.75"
        stdV="3.05"
      />
      <LinePlot
        seriesData={DVPressureData}
        yAxisName="DV-Pressure"
        textTitle="Monthly Time Series Plot for DVPressure Data"
        minV="-0.04"
        maxV="8.33"
        avgV="-0.02"
        stdV="0.15"
      />
      <LinePlot
        seriesData={reservoirsData}
        yAxisName="Reservoirs"
        textTitle="Monthly Time Series Plot for Reservoir Data"
        minV="1.35"
        maxV="2.05"
        avgV="1.57"
        stdV="0.09"
      />
      <LinePlot
        seriesData={oilTempData}
        textTitle="Monthly Time Series Plot for Oil Temperature Data"
        yAxisName="Oil Temperature"
        minV="13.88"
        maxV="97.90"
        avgV="67.31"
        stdV="5.38"
      />
      <LinePlot
        seriesData={flowmeterData}
        yAxisName="Flowmeter"
        textTitle="Monthly Time Series Plot for Flowmeter Data"
        minV="18.83"
        maxV="43.07"
        avgV="20.40"
        stdV="3.74"
      />
      <LinePlot
        seriesData={motorData}
        yAxisName="Motor"
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
        <Img src={imageRelation} alt="The relation" loading="lazy" />
      </ImageContainer>
    </Suspense>
  );
}

export default HistoricalAnalysis;
