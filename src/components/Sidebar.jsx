import styled from "styled-components";
import PropTypes from "prop-types";

import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  grid-row: 1 / -1;
  padding: 3.2rem 2.4rem;
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);
`;

function Sidebar({ dataLength }) {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav dataLength={dataLength} />
    </StyledSidebar>
  );
}

Sidebar.propTypes = {
  dataLength: PropTypes.number.isRequired,
}

export default Sidebar;
