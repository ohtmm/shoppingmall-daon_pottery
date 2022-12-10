import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../../lib/context/productsContext';
import setLocalStorage from '../../../lib/utils/setLocalStorage';
import {
  DetailContainer,
  DetailSider,
  OtherProduct,
  ProductDetailContainer,
} from './StyledComponents';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isAddedCart, setIsAddedCart] = useState(false);
  const data = useContext(ProductsContext);
  const selected = data?.productsDB?.filter((product) => product.id === id);
  const other = data?.productsDB?.filter((product) => product.id !== id);
  const handleAddCart = () => {
    setIsAddedCart((prev) => !prev);
    if (selected) {
      setLocalStorage(selected);
      const updated = data?.productsInCart?.concat(selected);
      data?.setProductsInCart(updated!);
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
