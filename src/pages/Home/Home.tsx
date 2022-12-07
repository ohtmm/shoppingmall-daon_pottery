import { useContext } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { ProductCardsContainer } from '../../components/ProductCards/ProductCardsStyledComponents';
import ProductCards from '../../components/ProductCards/ProductCars';
import { ProductsContext } from '../../lib/context/productsContext';
import { TProduct } from '../Products/NewProducts/NewProducts';
import { HomeContents, HomeLayout } from './HomeStyleCompoents';

const sortProducts = (products?: TProduct[] | null, categoryName?: string) => {
  const filtered = products?.filter(
    (product) => product.category === categoryName
  );
  return filtered;
};

const Home = () => {
  const value = useContext(ProductsContext);
  const bases = sortProducts(value?.products, 'base');
  const mugs = sortProducts(value?.products, 'mug');
  const bowls = sortProducts(value?.products, 'bowl');
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
