import { BsCart4 } from 'react-icons/bs';
import { RiAddBoxLine, RiUserReceivedLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Logo>ohtmm pottery</Logo>
      </Link>
      <ProductsCategory>
        <li>mug</li>
        <li>plate</li>
        <li>bowl</li>
      </ProductsCategory>
      <UserNav>
        <Link to='/carts'>
          <BsCart4 />
        </Link>
        <Link to='/products/new'>
          <RiAddBoxLine />
        </Link>
        <button>
          <RiUserReceivedLine />
          {/* logout RiUserSharedFill */}
        </button>
      </UserNav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  background-color: lightgoldenrodyellow;
`;

const Logo = styled.h1`
  font-size: xx-large;
  color: #222;
  margin: 0 0 0 2rem;
`;

const ProductsCategory = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  li {
    margin-right: 1rem;
  }
`;

const UserNav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 8rem;
  margin-right: 2rem;

  font-size: x-large;
`;
