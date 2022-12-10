import { useContext } from 'react';
import ProductCards from '../../components/ProductCards/ProductCards';
import SkeletonCards from '../../components/Skeleton/SkeletonCards';
import { ProductsContext } from '../../lib/context/productsContext';
import { sortProducts } from '../../lib/utils/sortProducts';
import {
  HomeContents,
  HomeLayout,
  ProductCardsContainer,
} from './StyleComponents';

const Home = () => {
  const data = useContext(ProductsContext);
  const bases = sortProducts(data?.productsDB, 'base');
  const mugs = sortProducts(data?.productsDB, 'mug');
  const bowls = sortProducts(data?.productsDB, 'bowl');
  return (
    <HomeLayout>
      <HomeContents>
        <img src='./images/main_hands.jpg' alt='hands' />
        <img src='./images/main_hands2.jpg' alt='hands' />
        <img src='./images/main_potter.jpg' alt='potter ' />
        <img src='./images/main_potter2.jpg' alt='potter ' />
      </HomeContents>
      <ProductCardsContainer>
        {!data?.productsDB && <SkeletonCards />}
        {!data?.productsDB && <SkeletonCards />}
        {!data?.productsDB && <SkeletonCards />}
        {bases && <ProductCards products={bases} />}
        {mugs && <ProductCards products={mugs} />}
        {bowls && <ProductCards products={bowls} />}
      </ProductCardsContainer>
    </HomeLayout>
  );
};
export default Home;
