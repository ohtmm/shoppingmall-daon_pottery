import { AuthContext } from '../../lib/context/authContext';
import { useContext, useEffect } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

const Products = () => {
  const user = useContext(AuthContext);
  const navigator = useNavigate();
  console.log('products 페이지', user);
  useEffect(() => {
    if (!user) {
      navigator('/');
    }
  }, []);
  return <>Products</>;
};

export default Products;
