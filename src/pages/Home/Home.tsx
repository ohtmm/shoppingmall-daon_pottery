import { useContext } from 'react';
import ProductCards from '../../components/ProductCards/ProductCards';
import { ProductsContext } from '../../lib/context/productsContext';
import { sortProducts } from '../../lib/utils/sortProducts';
import { TProduct } from '../Products/NewProducts/NewProducts';
import {
  HomeContents,
  HomeLayout,
  ProductCardsContainer,
} from './StyleComponents';

const Home = () => {
  const products = useContext(ProductsContext);
  const bases = sortProducts(products, 'base');
  const mugs = sortProducts(products, 'mug');
  const bowls = sortProducts(products, 'bowl');
  return (
    <HomeLayout>
      <HomeContents>
        <img src='./images/main_hands.jpg' alt='hands' />
        <img src='./images/main_hands2.jpg' alt='hands' />
        <img src='./images/main_potter.jpg' alt='potter ' />
        <img src='./images/main_potter2.jpg' alt='potter ' />
      </HomeContents>
      <ProductCardsContainer>
        <ProductCards products={bases} />
        <ProductCards products={mugs} />
        <ProductCards products={bowls} />
      </ProductCardsContainer>
    </HomeLayout>
  );
};
export default Home;
