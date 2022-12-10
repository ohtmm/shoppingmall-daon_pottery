import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../../lib/context/productsContext';
import {
  DetailContainer,
  DetailSider,
  OtherProduct,
  ProductDetailContainer,
} from './StyledComponents';

const ProductDetail = () => {
  const [isAddedCart, setIsAddedCart] = useState(false);
  const data = useContext(ProductsContext);
  const { id } = useParams<{ id: string }>();
  const selected = data?.productsDB?.filter((product) => product.id === id);
  const other = data?.productsDB?.filter((product) => product.id !== id);
  const handleAddCart = () => {
    setIsAddedCart((prev) => !prev);
    data?.setProductsInCart((prev) => {
      const updated = [...prev!, selected![0]];
      return updated;
    });
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
            <button className='btn cart' onClick={handleAddCart}>
              {!isAddedCart ? ' 장바구니' : '이미 장바구니에!'}
            </button>
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
