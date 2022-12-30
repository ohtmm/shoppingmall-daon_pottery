import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../lib/context/authContext';
import useProducts from '../../../lib/hooks/useProducts';
import useCart from '../../../lib/hooks/useCart';
import {
  DetailContainer,
  DetailSider,
  OtherProduct,
  ProductDetailContainer,
} from './StyledComponents';

const ProductDetail = () => {
  const [isAddedCart, setIsAddedCart] = useState(false);
  const { id } = useParams<{ id: string }>();
  const user = useContext(AuthContext);
  const { addItem } = useCart();

  const { products } = useProducts();
  const selected = products?.filter((product) => product.id === id);
  const other = products?.filter((product) => product.id !== id);

  const handleAddCart = () => {
    setIsAddedCart((prev) => !prev);
    if (selected && user) {
      addItem.mutate(selected[0]);
    }
  };

  return (
    <DetailContainer>
      {selected?.map((product) => (
        <ProductDetailContainer key={product.id}>
          {product.photoURL && (
            <img
              className='productImg'
              src={product.photoURL}
              alt={product.name}
            />
          )}
          <div className='productInfo'>
            <h2 className='name'>{product.name}</h2>
            <span className='price'>{product.price} 원</span>
            <p className='desc'>{product.description}</p>
            {!isAddedCart ? (
              <button className='btn cart' onClick={handleAddCart}>
                장바구니
              </button>
            ) : (
              <button className='btn cart' disabled>
                이미 장바구니에!
              </button>
            )}
            <button className='btn buy'>바로 구매</button>
          </div>
        </ProductDetailContainer>
      ))}
      <DetailSider>
        {other?.map((product) => {
          return (
            <OtherProduct key={product.id}>
              {product.photoURL && (
                <img
                  key={product.id}
                  className='productImg'
                  src={product.photoURL}
                  alt={product.name}
                />
              )}
            </OtherProduct>
          );
        })}
      </DetailSider>
    </DetailContainer>
  );
};

export default ProductDetail;
