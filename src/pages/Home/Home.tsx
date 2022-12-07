import { useContext } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { ProductsContext } from '../../lib/context/productsContext';
import {
  HomeContents,
  HomeLayout,
  HomeProduct,
  HomeProducts,
} from './HomeStyleCompoents';

const Home = () => {
  const value = useContext(ProductsContext);
  return (
    <HomeLayout>
      <HomeContents>
        <img src='./images/main_hands.jpg' alt='hands' />
        <img src='./images/main_hands2.jpg' alt='hands' />
        <img src='./images/main_potter.jpg' alt='potter ' />
        <img src='./images/main_potter2.jpg' alt='potter ' />
      </HomeContents>
      <HomeProducts>
        <HomeProduct>
          {value?.products?.map((product) => {
            return (
              <ProductCard
                key={product.id}
                productImg={product.photoURL}
                productName={product.name}
                productDescription={product.description}
                productPrice={product.price}
              />
            );
          })}
        </HomeProduct>
        <HomeProduct>
          <ProductCard
            productImg='./images/product_high_bowl.jpg'
            productName='눈 내리는 마을의 슈톨렌'
            productDescription='새햐안 눈이 내린 마을에서 도란도란 모여 먹는 슈톨렌 한 조각과 어울리는 높은 보울'
            productPrice={52000}
          />
          <ProductCard
            productImg='./images/product_stollen_mug.jpg'
            productName='슈톨렌 시리즈 | sugar powder mug'
            productDescription='손 시린 겨울은 오히려 좋아요. 슈톨렌과 함께라면! '
            productPrice={52000}
          />
          <ProductCard
            productImg='./images/product_stollen_jug.jpg'
            productName='슈톨렌 시리즈 | sugar powder jug'
            productDescription='손 시린 겨울은 오히려 좋아요. 슈톨렌과 함께라면! '
            productPrice={52000}
          />
        </HomeProduct>
        <HomeProduct>
          <ProductCard
            productImg='./images/product_mug.jpg'
            productName='겨울 장작 나무'
            productDescription='따뜻한 벽난로에서 타닥타닥 타고 있는 겨울 장작 나무 같은 머그와 소서'
            productPrice={46000}
          />
          <ProductCard
            productImg='./images/product_latte_mug.jpg'
            productName='진한 라떼'
            productDescription='우유보다 에스프레소를 더 많이 부은 진한 라떼 머그와 소서'
            productPrice={48000}
          />
        </HomeProduct>
      </HomeProducts>
    </HomeLayout>
  );
};
export default Home;
