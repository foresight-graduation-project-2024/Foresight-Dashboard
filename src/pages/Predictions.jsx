import styled from "styled-components";

import PredictionsCard from "../components/PredictionsCard";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding: 2rem;
  background-color: var(--color-grey-0);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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