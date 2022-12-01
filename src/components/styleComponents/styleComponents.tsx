import styled from 'styled-components';
import { RiUserReceivedLine } from 'react-icons/ri';

// Header
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  background-color: lightgoldenrodyellow;
`;

export const Logo = styled.h1`
  font-size: xx-large;
  color: #222;
  margin: 0 0 0 2rem;
`;

export const ProductsCategory = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  li {
    margin-right: 1rem;
  }
`;

export const UserNav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 12rem;
  margin-right: 2rem;

  font-size: x-large;
`;

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 6rem;
  margin: 0 1rem;
  span {
    font-size: medium;
  }
  img {
    display: block;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    outline: 1px solid #222;
    outline-offset: 1px;
  }
`;
