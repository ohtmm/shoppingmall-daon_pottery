import { useContext } from 'react';
import { BsCart4 } from 'react-icons/bs';
import {
  RiAddBoxLine,
  RiUserReceivedLine,
  RiUserSharedFill,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { AuthContext } from '../lib/context/authContext';
import { SignInGoogle, SignOut } from '../service/auth/signInGoogle';
import {
  HeaderContainer,
  Logo,
  ProductsCategory,
  UserAvatar,
  UserNav,
} from './styleComponents/styleComponents';

const Header = () => {
  const user = useContext(AuthContext);
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
        {user && (
          <UserAvatar>
            <span>{user.displayName}</span>
            <img src={`${user.photoURL}`} />
          </UserAvatar>
        )}
        {!user ? (
          <button onClick={SignInGoogle}>
            <RiUserReceivedLine />
          </button>
        ) : (
          <button onClick={SignOut}>
            <RiUserSharedFill />
          </button>
        )}
      </UserNav>
    </HeaderContainer>
  );
};

export default Header;
