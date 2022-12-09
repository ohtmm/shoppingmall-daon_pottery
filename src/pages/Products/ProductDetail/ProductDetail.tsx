import { useContext } from 'react';
import { BsCart4 } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../../lib/context/productsContext';
import {
  DetailContainer,
  DetailSider,
  OtherProduct,
  ProductDetailContainer,
} from './StyledComponents';

const ProductDetail = () => {
  const products = useContext(ProductsContext);
  const { id } = useParams<{ id: string }>();
  const selected = products?.filter((product) => product.id === id);
  const other = products?.filter((product) => product.id !== id);
  return (
    <DetailContainer>
      {selected?.map((product) => (
        <ProductDetailContainer>
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
            <button className='btn cart'>장바구니</button>
            <button className='btn buy'>바로 구매</button>
          </div>
        </ProductDetailContainer>
      ))}
      <DetailSider>
        {other?.map((product) => {
          return (
            <OtherProduct>
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
