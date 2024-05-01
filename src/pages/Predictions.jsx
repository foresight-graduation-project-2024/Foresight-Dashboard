import styled from "styled-components";

import PredictionsCard from "../components/PredictionsCard";

const Container = styled.div`
  width: 80%;
  margin-left: 10%;
  justify-content: space-between;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 4.8rem;
  row-gap: 2.4rem;
  padding: 2.4rem 5%;
  background-color: var(--color-grey-0);
  border-radius: 6px;
`;

const Predictions = () => {
  return (
    <Container>
      <PredictionsCard title="Total Revenue" value="$4,562" />
      <PredictionsCard title="Total Visitors" value="$7,562" />
      <PredictionsCard title="Total Transactions" value="$3,262" />
      <PredictionsCard title="Total Products" value="$5,100" />
      <PredictionsCard title="Average Revenue" value="$1,513" />
      <PredictionsCard title="Average Visitors" value="$3,562" />
      <PredictionsCard title="Average Transactions" value="$1,062" />
      <PredictionsCard title="Average Products" value="$2,180" />
    </Container>
  );
};

export default Predictions