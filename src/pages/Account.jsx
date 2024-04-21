import { useSelector } from "react-redux";
import styled from 'styled-components';

const Card = styled.div`
  text-align: center;
  background: var(--color-grey-0);
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  padding: 12px;
  margin: 24px;
`;

const InfoText = styled.p`
  color: var(--color-grey-700);
  font-size: 18px;
  margin: 8px 0;
`;

function Account() {
  const user = useSelector((state) => state.user.user);

  return (
    <Card>
      <InfoText>Full Name: {user.firstname + " " + user.lastname}</InfoText>
      <InfoText>Email: {user.email}</InfoText>
      <InfoText>Role: {user.role}</InfoText>
    </Card>
  );
}

export default Account;
