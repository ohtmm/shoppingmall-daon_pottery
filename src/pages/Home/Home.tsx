import { useContext } from 'react';
import ProductCards from '../../components/ProductCards/ProductCards';
import SkeletonCards from '../../components/Skeleton/SkeletonCards';
import useProducts from '../../lib/hooks/useProducts';
import { sortProducts } from '../../lib/utils/sortProducts';
import {
  HomeContents,
  HomeLayout,
  ProductCardsContainer,
} from './StyleComponents';

const Home = () => {
  const { products, isLoading } = useProducts();
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
        {isLoading && <SkeletonCards />}
        {isLoading && <SkeletonCards />}
        {isLoading && <SkeletonCards />}
        {bases && <ProductCards products={bases} />}
        {mugs && <ProductCards products={mugs} />}
        {bowls && <ProductCards products={bowls} />}
      </ProductCardsContainer>
    </HomeLayout>
  );
};
export default Home;
