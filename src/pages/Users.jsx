import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getUsers } from "../store/userSlice";
import Indicator from "../components/custom/Indicator";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  background-color: var(--color-primary);
  color: var(--color-grey-0);
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: var(--color-grey-100);
  }
`;

const Th = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid var(--color-grey-400);
`;

const Td = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid var(--color-grey-900);
`;

function Users() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.users);
  const isLoading = useSelector((state) => state.ui.isLoading);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Indicator />
      ) : (
        <Table>
          <Thead>
            <tr>
              <Th>ID</Th>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th>Enabled</Th>
            </tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <Tr key={user.id}>
                <Td>{user.id}</Td>
                <Td>{user.firstname}</Td>
                <Td>{user.lastname}</Td>
                <Td>{user.email}</Td>
                <Td>{user.role}</Td>
                <Td>{user.enabled ? "Yes" : "No"}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </>
  );
}

export default Users;
