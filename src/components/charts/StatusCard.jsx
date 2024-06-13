import styled from "styled-components"
import PropTypes from 'prop-types';

const CardStatus = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  text-align: center;
  width: 200px;
  height: 140px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
`

const H3 = styled.h3`
  margin: 0;
  font-size: 1.25em;
  color: var(--color-grey-700);
`

const P = styled.p`
  margin: 20px 0 0;
  font-size: 1.6em;
  color: var(--color-grey-500);
`

function StatusCard({ title, value }) {
  return (
    <CardStatus>
      <H3>{title}</H3>
      <P>{value}</P>
    </CardStatus>
  )
}

StatusCard.propTypes = {
  title: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired
};

export default StatusCard