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
import Category from './ProductsCatgory';
import {
  AuthButton,
  HeaderContainer,
  Logo,
  ProductsCategory,
  StyledLink,
  UserAvatar,
  UserNav,
} from './styleComponents/styleComponents';

const Header = () => {
  const user = useContext(AuthContext);
  return (
    <HeaderContainer>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Logo>DAON</Logo>
      </Link>
      <Category />
      <UserNav>
        {user && (
          <StyledLink to='/carts'>
            <BsCart4 />
          </StyledLink>
        )}
        {user?.uid === `${process.env.REACT_APP_FIREBASE_ADMIN_UID}` && (
          <StyledLink to='/products/new'>
            <RiAddBoxLine />
          </StyledLink>
        )}
        {user && (
          <UserAvatar>
            <span>{user.displayName}</span>
            <img src={`${user.photoURL}`} />
          </UserAvatar>
        )}
        {!user ? (
          <AuthButton onClick={SignInGoogle}>
            <RiUserReceivedLine />
          </AuthButton>
        ) : (
          <AuthButton onClick={SignOut}>
            <div>out</div>
          </AuthButton>
        )}
      </UserNav>
    </HeaderContainer>
  );
};

export default Header;
