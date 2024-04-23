import styled from "styled-components";

import FailureCard from "../components/FailureCard";

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

const Failure = () => {
  return (
    <Container>
      <FailureCard title="Total Revenue" value="$4,562" />
      <FailureCard title="Total Visitors" value="$7,562" />
      <FailureCard title="Total Transactions" value="$3,262" />
      <FailureCard title="Total Products" value="$5,100" />
      <FailureCard title="Average Revenue" value="$1,513" />
      <FailureCard title="Average Visitors" value="$3,562" />
      <FailureCard title="Average Transactions" value="$1,062" />
      <FailureCard title="Average Products" value="$2,180" />
    </Container>
  );
};

export default Failure