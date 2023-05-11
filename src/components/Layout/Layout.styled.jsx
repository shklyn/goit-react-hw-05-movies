import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #adb8ff;

  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  box-shadow: 0px 0px 18px 9px rgba(0, 0, 0, 0.75);
`;

export const NavList = styled.ul`
  display: flex;
  gap: 30px;
  font-size: 22px;
  margin-left: 70px;
  font-weight: 700;
`;

export const StyledLink = styled(NavLink)`
  color: #212121;

  &.active {
    font-size: 23px;
    color: #1744be;
    transition: color 0.3s ease-in-out;
    text-shadow: 0 0 5px rgba(0, 0, 255, 0.8);
  }
`;

export const LoaderContainer = styled.div`
  margin-top: 50px;
`;