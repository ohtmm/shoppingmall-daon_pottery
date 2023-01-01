import { ProductCardContainer } from './style';
import { BsBookmarkHeart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
type TProductCard = {
  productImg?: string | null;
  productName?: string;
  productDescription?: string;
  productPrice?: number;
  productId?: string;
};

const ProductCard = ({
  productId,
  productImg,
  productName,
  productDescription,
  productPrice,
}: TProductCard) => {
  const navigator = useNavigate();
  const handleClick = (productId?: string) => {
    navigator(`/products/base/${productId}`);
  };
  return (
    <ProductCardContainer
      onClick={() => {
        handleClick(productId);
      }}
    >
      {productImg && (
        <img className='productImg' src={productImg} alt={productName} />
      )}
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
