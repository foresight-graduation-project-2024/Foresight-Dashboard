import PropTypes from "prop-types";
import styled from 'styled-components';

const TableContainer = styled.div`
  margin: 20px;
  font-family: Arial, sans-serif;
`;

const H2 = styled.h2`
  text-align: center;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 18px;
  text-align: left;
`;

const TableHeader = styled.thead`
  background-color: var(--color-grey-200);
  text-align: center;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid var(--color-grey-300);
  text-align: center;

  &:nth-of-type(even) {
    background-color: var(--color-grey-100);
  }
`;

const TableHeaderCell = styled.th`
  padding: 12px 15px;
`;

const TableCell = styled.td`
  padding: 12px 15px;
`;

const StatisticalTable = ({tableName, tStatistic1, tStatistic2, tStatistic3, pValue1, pValue2, pValue3}) => {
  const data = [
    { failure: 'Failure 1', tStatistic: tStatistic1, pValue: pValue1 },
    { failure: 'Failure 2', tStatistic: tStatistic2, pValue: pValue2 },
    { failure: 'Failure 3', tStatistic: tStatistic3, pValue: pValue3 },
  ];

  return (
    <TableContainer>
      <H2>{tableName}</H2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Failure</TableHeaderCell>
            <TableHeaderCell>T-Statistic</TableHeaderCell>
            <TableHeaderCell>P-Value</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <tbody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.failure}</TableCell>
              <TableCell>{row.tStatistic}</TableCell>
              <TableCell>{row.pValue}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

StatisticalTable.propTypes = {
  tableName: PropTypes.string.isRequired,
  tStatistic1: PropTypes.string.isRequired,
  tStatistic2: PropTypes.string.isRequired,
  tStatistic3: PropTypes.string.isRequired,
  pValue1: PropTypes.string.isRequired,
  pValue2: PropTypes.string.isRequired,
  pValue3: PropTypes.string.isRequired,
};

export default StatisticalTable;