import { Link } from 'react-router-dom';
import styled from 'styled-components';
import App from '../../App';

// Header
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  border-bottom: 1px solid #222;
`;

export const Logo = styled.h1`
  font-size: xx-large;
  color: #222;
  margin: 0 0 0 2rem;
`;

export const ProductsCategory = styled.ul`
  position: absolute;
  left: 40%;
  top: 1rem;
  display: flex;
  align-items: center;
  list-style: none;
  cursor: pointer;
  li {
    margin-right: 1rem;
    transition: all 0.5s linear;
    :hover {
      transform: scale(1.2);
    }
  }
`;

export const CategorySub = styled.ul`
  list-style: none;
  font-size: small;
  opacity: 0;
  transition: all 0.5s linear;
  :hover {
    opacity: 1;
  }
  li {
    height: 1rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    color: #222;
    background-color: #fff;
    border-radius: 20px;
    :hover {
      background-color: ${(props) => props.theme.color.black};
      color: ${(props) => props.theme.color.white};
    }
  }
`;

export const UserNav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 14rem;
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
    font-size: small;
  }
  img {
    display: block;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 100%;
    outline: 1px solid #222;
    outline-offset: 1px;
  }
`;

export const AuthButton = styled.button`
  position: absolute;
  top: -1rem;
  right: -1rem;
  width: 3rem;
  height: 4rem;
  font-size: 1rem;
  background-color: ${(props) => props.theme.color.black};
  border: none;
  outline: 1px solid #222;
  border-radius: 100%;
  cursor: pointer;
  div {
    color: ${(props) => props.theme.color.white};
    width: 0.5rem;
    height: 1rem;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  margin: 0 0.5rem;
  font-size: medium;
  color: #222;
`;
