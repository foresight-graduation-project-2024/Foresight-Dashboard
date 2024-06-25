import { lazy, Suspense } from "react";
import styled from "styled-components"

const StatisticalTable = lazy(() => import("../components/StatisticalTable"));

const Tables = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 7.2rem;
`

function StatisticalAnalysis() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Tables>
        <StatisticalTable 
          tableName="TP2"
          tStatistic1="-75.124378"
          tStatistic2="-1.091811"
          tStatistic3="-2.266358"
          pValue1="0.0"
          pValue2="0.274941"
          pValue3="0.023431"
        />
        <StatisticalTable 
          tableName="TP3"
          tStatistic1="110.696231"
          tStatistic2="2.163184"
          tStatistic3="1.591628"
          pValue1="0.0"
          pValue2="0.030549"
          pValue3="0.111470"
        />
        <StatisticalTable 
          tableName="H1"
          tStatistic1="213.498885"
          tStatistic2="1.676189"
          tStatistic3="10.727872"
          pValue1="0.0"
          pValue2="0.093730"
          pValue3="7.656079e-27"
        />
        <StatisticalTable 
          tableName="DV_pressure"
          tStatistic1="-0.128158"
          tStatistic2="0.330234"
          tStatistic3="24.327923"
          pValue1="0.898025"
          pValue2="0.741230"
          pValue3="1.524883e-130"
        />
        <StatisticalTable 
          tableName="Reservoirs"
          tStatistic1="-664.885634"
          tStatistic2="-56.584574"
          tStatistic3="1142.487384"
          pValue1="0.0"
          pValue2="0.0"
          pValue3="0.0"
        />
        <StatisticalTable 
          tableName="Oil_temperature"
          tStatistic1="-184.772591"
          tStatistic2="13.518108"
          tStatistic3="-41.588248"
          pValue1="0.0"
          pValue2="2.648275e-41"
          pValue3="0.0"
        />
        <StatisticalTable 
          tableName="Flowmeter"
          tStatistic1="-82.879227"
          tStatistic2="-0.908656"
          tStatistic3="-4.559181"
          pValue1="0.0"
          pValue2="0.363552"
          pValue3="5.138310e-06"
        />
        <StatisticalTable 
          tableName="Motor_current"
          tStatistic1="-35.231752"
          tStatistic2="4.964920"
          tStatistic3="-3.576303"
          pValue1="4.112110e-265"
          pValue2="6.977981e-07"
          pValue3="0.000349"
        />
      </Tables>
    </Suspense>
  )
}

export default StatisticalAnalysis