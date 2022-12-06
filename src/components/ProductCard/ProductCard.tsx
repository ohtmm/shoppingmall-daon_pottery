import { ProductCardContainer } from './ProductStyledComponent';
import { BsBookmarkHeart } from 'react-icons/bs';
type TProductCard = {
  productImg: string;
  productName: string;
  productDescription: string;
  productPrice: number;
};

const ProductCard = ({
  productImg,
  productName,
  productDescription,
  productPrice,
}: TProductCard) => {
  return (
    <ProductCardContainer>
      <img className='productImg' src={productImg} alt={productName} />
      <div className='title'>
        <h2 className='name'>{productName}</h2>
        <span className='price'>{productPrice}</span>
        <span className='bookMark'>
          <BsBookmarkHeart />
        </span>
      </div>
      <p className='desc'>{productDescription}</p>
    </ProductCardContainer>
  );
};

export default ProductCard;
