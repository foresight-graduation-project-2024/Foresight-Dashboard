import { Outlet } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import Sidebar from "./Sidebar";
import Header from "./Header";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
`;

function AppLayout({ dataLength }) {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar dataLength={dataLength} />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

AppLayout.propTypes = {
  dataLength: PropTypes.number.isRequired,
}

export default AppLayout;
