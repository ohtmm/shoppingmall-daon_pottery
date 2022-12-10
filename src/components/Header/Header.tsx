import { useContext } from 'react';
import { BsCart4, BsBookmarkHeart } from 'react-icons/bs';
import { RiAddBoxLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../lib/context/authContext';
import { ProductsContext } from '../../lib/context/productsContext';
import { SignInGoogle, SignOut } from '../../service/auth/signInGoogle';
import Category from '../Category';
import {
  AuthButton,
  HeaderContainer,
  Logo,
  StyledLink,
  UserAvatar,
  UserNav,
} from './StyleComponents';

const Header = () => {
  const user = useContext(AuthContext);
  const productsDB = useContext(ProductsContext);
  return (
    <HeaderContainer>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Logo>potter</Logo>
      </Link>
      <Category />
      <UserNav>
        {user && (
          <>
            <StyledLink to='/carts'>
              <BsCart4 />
              <span className='cartsNum'>
                {productsDB?.productsInCart
                  ? productsDB?.productsInCart.length
                  : 0}
              </span>
            </StyledLink>
            <StyledLink to='/bookmark'>
              <BsBookmarkHeart />
            </StyledLink>
          </>
        )}
        {user?.uid === `${process.env.REACT_APP_FIREBASE_ADMIN_UID}` && (
          <StyledLink to='/products/new'>
            <RiAddBoxLine />
          </StyledLink>
        )}
        {user && (
          <UserAvatar>
            <span>{user.displayName}</span>
            <img src={`${user.photoURL}`} alt={`${user.displayName}`} />
          </UserAvatar>
        )}
        {!user ? (
          <AuthButton onClick={SignInGoogle}>
            <div>in</div>
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
