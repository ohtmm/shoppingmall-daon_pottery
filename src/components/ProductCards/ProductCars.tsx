import { TProduct } from '../../pages/Products/NewProducts/NewProducts';
import ProductCard from '../ProductCard/ProductCard';
import { ProductCardContainer } from './ProductCardsStyledComponents';

type TProductCards = {
  products?: TProduct[] | null;
};

const ProductCards = ({ products }: TProductCards) => {
  return (
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
  );
};

export default ProductCards;
