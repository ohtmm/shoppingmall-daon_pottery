import { useContext } from 'react';
import Button from '../../components/Button';
import { ProductsContext } from '../../lib/context/productsContext';
import setLocalStorage from '../../lib/utils/setLocalStorage';
import { CartContainer, CartItem } from './StyledComponents';

const UserCart = () => {
  const data = useContext(ProductsContext);
  const handleDelete = (id: string) => {
    const updated = data?.productsInCart?.filter((product) => {
      return product.id !== id;
    });
    localStorage.removeItem('cart');
    updated && setLocalStorage(updated);
    updated && data?.setProductsInCart(updated);
  };
  return (
    <CartContainer>
      <h1>Cart</h1>
      {!data?.productsInCart?.length && <h2>장바구니가 비었습니다</h2>}
      {data?.productsInCart?.map((product) => {
        return (
          <CartItem key={product.id}>
            {product?.photoURL && (
              <img src={product.photoURL} alt={product.name} />
            )}
            <div className='itemInfo'>
              <h3>
                <span className='label'>제품 이름: </span> {product.name}
              </h3>
              <div>
                <span className='label'>제품 가격: </span>
                {product.price} 원
              </div>
              <div>
                <span className='label'>수량: </span>1
              </div>
            </div>
            <div className='buttonBox'>
              <Button btnName='추가' />
              <Button
                btnName='삭제'
                callback={() => {
                  handleDelete(product.id!);
                }}
              />
            </div>
          </CartItem>
        );
      })}
    </CartContainer>
  );
};

export default UserCart;
