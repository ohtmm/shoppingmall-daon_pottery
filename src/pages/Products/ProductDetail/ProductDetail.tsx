import { useContext } from 'react';
import { BsCart4 } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../../lib/context/productsContext';
import { ProductDetailContainer } from './StyledComponents';

const ProductDetail = () => {
  const products = useContext(ProductsContext);
  const { id } = useParams<{ id: string }>();
  const selected = products?.filter((product) => product.id === id);
  return (
    <>
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
            <BsCart4 />
            <span className='price'>{product.price} 원</span>
            <p className='desc'>{product.description}</p>
          </div>
        </ProductDetailContainer>
      ))}
    </>
  );
};

export default ProductDetail;
