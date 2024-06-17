import { useEffect, useState } from "react";
import LinePlot from "../components/charts/LinePlot";
import AreaPlot from "../components/charts/AreaPlot";

function RealTimeAnalysis() {
  const [data, setData] = useState([]);
  const [connectionStatus, setConnectionStatus] = useState('Disconnected');

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8765/ws');

    ws.onopen = () => {
      console.log('WebSocket connection established');
      setConnectionStatus('Connected');
    };

    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);
      // console.log('Message received from WebSocket:', response);
      setData(prevData => [...prevData, response]);
    };

    ws.onerror = (error) => {
      console.log('WebSocket error:', error);
      setConnectionStatus('Error');
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
      setConnectionStatus('Disconnected');
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <p>Status: {connectionStatus}</p>
      <LinePlot
        seriesData={data.slice(-20).map(item => item.TP2 || 0)}
        xAxisData={data.slice(-20).map(item => item.timestamp || 0)}
        yAxisName="TP2"
        seriesName="TP2 Value"
        textTitle="TP2 Real-Time Analysis"
        hideCard={true}
      />
      {/* <LinePlot
        seriesData={data.slice(-20).map(item => item.TP3 || 0)}
        xAxisData={data.slice(-20).map(item => item.timestamp || 0)}
        yAxisName="TP3"
        seriesName="TP3 Value"
        textTitle="TP3 Real-Time Analysis"
        hideCard={true}
      /> */}
      <AreaPlot 
        seriesName="TP3"
        seriesData={data.slice(-20).map(item => item.TP3 || 0)}
        textTitle="TP3 Real-Time Analysis"
        labelValues={data.slice(-20).map(item => item.timestamp || 0)}
      />
      <LinePlot
        seriesData={data.slice(-20).map(item => item.H1 || 0)}
        xAxisData={data.slice(-20).map(item => item.timestamp || 0)}
        yAxisName="H1"
        seriesName="H1 Value"
        textTitle="H1 Real-Time Analysis"
        hideCard={true}
      />
      <LinePlot
        seriesData={data.slice(-20).map(item => item.DV_pressure || 0)}
        xAxisData={data.slice(-20).map(item => item.timestamp || 0)}
        yAxisName="DV_Pressure"
        seriesName="DV_Pressure Value"
        textTitle="DV_Pressure Real-Time Analysis"
        hideCard={true}
      />
      <LinePlot
        seriesData={data.slice(-20).map(item => item.Reservoirs || 0)}
        xAxisData={data.slice(-20).map(item => item.timestamp || 0)}
        yAxisName="Reservoirs"
        seriesName="Reservoirs Value"
        textTitle="Reservoirs Real-Time Analysis"
        hideCard={true}
      />
      <LinePlot
        seriesData={data.slice(-20).map(item => item.Oil_temperature || 0)}
        xAxisData={data.slice(-20).map(item => item.timestamp || 0)}
        yAxisName="Oil Temperature"
        seriesName="Oil Temperature Value"
        textTitle="Oil Temperature Real-Time Analysis"
        hideCard={true}
      />
      <LinePlot
        seriesData={data.slice(-20).map(item => item.Flowmeter || 0)}
        xAxisData={data.slice(-20).map(item => item.timestamp || 0)}
        yAxisName="Flowmeter"
        seriesName="Flowmeter Value"
        textTitle="Flowmeter Real-Time Analysis"
        hideCard={true}
      />
      <LinePlot
        seriesData={data.slice(-20).map(item => item.Motor_current || 0)}
        xAxisData={data.slice(-20).map(item => item.timestamp || 0)}
        yAxisName="Motor_current"
        seriesName="Motor_current Value"
        textTitle="Motor_current Real-Time Analysis"
        hideCard={true}
      />
    </div>
  );
}

export default RealTimeAnalysis;
