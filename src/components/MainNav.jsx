import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineChartPie,
  HiOutlineChartBar,
  HiOutlineBeaker,
  HiOutlineInformationCircle,
  // HiOutlineUserGroup,
} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/about">
            <HiOutlineInformationCircle />
            <span>About</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/historical">
            <HiOutlineChartBar />
            <span>Historical Analysis</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/real-time">
            <HiOutlineChartPie />
            <span>Real-time Analysis</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/Predictions">
            <HiOutlineBeaker />
            <span>Predictions history</span>
          </StyledNavLink>
        </li>
        {/* <li>
          <StyledNavLink to="/users">
            <HiOutlineUserGroup />
            <span>Users</span>
          </StyledNavLink>
        </li> */}
        <li>
          <StyledNavLink to="/settings">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
