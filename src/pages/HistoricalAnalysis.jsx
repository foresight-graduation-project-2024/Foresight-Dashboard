import LinePlot from "../components/charts/LinePlot";
import BoxPlot from "../components/charts/BoxPlot";

function HistoricalAnalysis() {
  const reservoirsData = {
    seriesData: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    xAxisData: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  };

  const TP2Data = {
    seriesData: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    xAxisData: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  };

  const TP3Data = {
    seriesData: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    xAxisData: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  };

  const H1Data = {
    seriesData: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    xAxisData: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  };

  const DVPressureData = {
    seriesData: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    xAxisData: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  };

  const oilTempData = {
    seriesData: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    xAxisData: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  };

  const flowmeterData = {
    seriesData: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    xAxisData: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  };

  const motorData = {
    seriesData: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    xAxisData: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  };

  const monthReservoirsData = {
    seriesData: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    xAxisData: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  };

  const oliFailureData = {
    normalData: [54, 66, 69, 75, 88],
    failure1Data: [43, 65, 69, 76, 81],
    failure2Data: [31, 39, 45, 51, 59],
    failure3Data: [39, 46, 55, 65, 71],
    textTitle: "Box Plot of Oil_temperature between Normal and Failure Periods",
    xAxisText: "Oil_temperature",
  };

  const reservoirsFailureData = {
    normalData: [54, 66, 69, 75, 88],
    failure1Data: [43, 65, 69, 76, 81],
    failure2Data: [31, 39, 45, 51, 59],
    failure3Data: [39, 46, 55, 65, 71],
    textTitle: "Box Plot of Reservoirs between Normal and Failure Periods",
    xAxisText: "Reservoirs",
  };

  const TP3FailureData = {
    normalData: [54, 66, 69, 75, 88],
    failure1Data: [43, 65, 69, 76, 81],
    failure2Data: [31, 39, 45, 51, 59],
    failure3Data: [39, 46, 55, 65, 71],
    textTitle: "Box Plot of TP3 between Normal and Failure Periods",
    xAxisText: "TP3",
  };

  return (
    <div>
      <LinePlot
        seriesData={reservoirsData.seriesData}
        xAxisData={reservoirsData.xAxisData}
        yAxisName="Reservoirs"
        seriesName="Reservoirs Value"
        textTitle="Time Series Plot for Reservoirs Data"
        minV="1.35"
        maxV="2.05"
        avgV="1.57"
        stdV="0.09"
      />
      <LinePlot
        seriesData={TP2Data.seriesData}
        xAxisData={TP2Data.xAxisData}
        textTitle="Time Series Plot for TP2 Data"
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
        textTitle="Time Series Plot for TP3 Data"
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
        textTitle="Time Series Plot for H1 Data"
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
        yAxisName="DVPressure"
        seriesName="DVPressure Value"
        textTitle="Time Series Plot for DVPressure Data"
        minV="-0.04"
        maxV="8.33"
        avgV="-0.02"
        stdV="0.15"
      />
      <LinePlot
        seriesData={oilTempData.seriesData}
        xAxisData={oilTempData.xAxisData}
        textTitle="Time Series Plot for Oil Temperature Data"
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
        textTitle="Time Series Plot for Flowmeter Data"
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
        textTitle="Time Series Plot for Motor Data"
        minV="-0.01"
        maxV="9.68"
        avgV="2.38"
        stdV="2.19"
      />
      <LinePlot
        seriesData={monthReservoirsData.seriesData}
        xAxisData={monthReservoirsData.xAxisData}
        yAxisName="Month Reservoir"
        seriesName="Month Reservoir Value"
        textTitle="Time Series Plot for Month Reservoir Data"
        hideCard={true}
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
    </div>
  );
}

export default HistoricalAnalysis;
