import styled from "styled-components";
import PropTypes from 'prop-types';

const MetricContainer = styled.div`
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
  border-radius: 8px;
  background-color: var(--color-grey-50);
  box-shadow: var(--shadow-sm);
`;

const MetricTitle = styled.p`
  font-size: 14px;
  color: var(--color-grey-500);
  margin-bottom: 4px;
`;

const MetricValue = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 4px;
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