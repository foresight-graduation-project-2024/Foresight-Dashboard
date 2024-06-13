import styled from "styled-components";
import PropTypes from 'prop-types';

const MetricContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 12px;
  background-color: var(--color-grey-100);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const MetricTitle = styled.p`
  font-size: 16px;
  color: var(--color-grey-700);
  margin-bottom: 8px;
  font-weight: 500;
`;

const MetricValue = styled.p`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 0px;
  color: var(--color-grey-900);
`;

const PredictionsCard = ({ title, value }) => {
  return (
    <MetricContainer>
      <MetricTitle>{title}</MetricTitle>
      <MetricValue>{value}</MetricValue>
    </MetricContainer>
  );
};

PredictionsCard.propTypes = {
  title: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired
};

export default PredictionsCard