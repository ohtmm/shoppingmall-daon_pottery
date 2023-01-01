import ProductCards from '../../components/ProductCards/ProductCards';
import SkeletonCards from '../../components/Skeleton/SkeletonCards';
import useMainImages from '../../lib/hooks/useMainImage';
import useProducts from '../../lib/hooks/useProducts';
import { sortProducts } from '../../lib/utils/sortProducts';
import { HomeContents, HomeLayout, ProductCardsContainer } from './style';

const Home = () => {
  const { products, isLoading } = useProducts();
  const { mainImages, isLoading: ImagesLoading } = useMainImages();
  const bases = sortProducts(products, 'base');
  const mugs = sortProducts(products, 'mug');
  const bowls = sortProducts(products, 'bowl');

  return (
    <HomeLayout>
      <HomeContents>
        {ImagesLoading && <p>loading ...</p>}
        {mainImages &&
          mainImages.map((img, idx) => {
            return <img key={idx} src={img.url} alt={img.name} />;
          })}
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
