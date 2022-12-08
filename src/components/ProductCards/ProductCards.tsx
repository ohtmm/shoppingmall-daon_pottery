import { TProduct } from '../../pages/Products/NewProducts/NewProducts';
import ProductCard from '../ProductCard/ProductCard';
import {
  CategorizedCardContainer,
  ProductCardContainer,
} from './StyleComponents';

type TProductCards = {
  products?: TProduct[] | null;
  categorized?: boolean;
};

const ProductCards = ({ products, categorized }: TProductCards) => {
  return (
    <>
      {!categorized ? (
        <ProductCardContainer>
          {products?.map((product) => {
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
        </ProductCardContainer>
      ) : (
        <CategorizedCardContainer>
          {products?.map((product) => {
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
        </CategorizedCardContainer>
      )}{' '}
    </>
  );
};
export default ProductCards;
