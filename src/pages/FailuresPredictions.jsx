import styled from "styled-components";
import PropTypes from "prop-types";

const HeaderText = styled.p`
  font-size: 1.2em;
  color: var(--color-grey-700);
  margin-bottom: 12px;
  line-height: 1.5;
`;

const TableContainer = styled.div`
  overflow-x: auto;
  margin-top: 4.2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: var(--color-grey-100);
  }
`

const TableHeader = styled.th`
  border: 1px solid var(--color-grey-300);
  padding: 8px;
  background-color: var(--color-grey-200);
`;

const TableCell = styled.td`
  text-align: center;
  border: 1px solid var(--color-grey-300);
  padding: 8px;
`;

const FailuresPredictions = ({ data }) => {
  return (
    <>
      <HeaderText>
        Monitor and predict system failures with our dynamic dashboard, updated
        every 6 hours.
      </HeaderText>
      <HeaderText>
        Utilizing advanced Artificial Intelligence techniques, it provides
        timely insights and alerts to help you manage and prevent critical
        issues, ensuring seamless operational performance.
      </HeaderText>
      <TableContainer>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>Timestamp</TableHeader>
              <TableHeader>Type</TableHeader>
              <TableHeader>TP2</TableHeader>
              <TableHeader>TP3</TableHeader>
              <TableHeader>H1</TableHeader>
              <TableHeader>DV_pressure</TableHeader>
              <TableHeader>Reservoirs</TableHeader>
              <TableHeader>Oil_temperature</TableHeader>
              <TableHeader>Flowmeter</TableHeader>
              <TableHeader>Motor_current</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {data.map((record, index) => (
              <TableRow key={index}>
                <TableCell>{record.timestamp}</TableCell>
                <TableCell>{record.type}</TableCell>
                <TableCell>{record.TP2}</TableCell>
                <TableCell>{record.TP3}</TableCell>
                <TableCell>{record.H1}</TableCell>
                <TableCell>{record.DV_pressure}</TableCell>
                <TableCell>{record.Reservoirs}</TableCell>
                <TableCell>{record.Oil_temperature}</TableCell>
                <TableCell>{record.Flowmeter}</TableCell>
                <TableCell>{record.Motor_current}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </>
  );
};

FailuresPredictions.propTypes = {
  data: PropTypes.array.isRequired,
}

export default FailuresPredictions;
