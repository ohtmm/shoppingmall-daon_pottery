import Button from '../../components/Button';
import useCart from '../../lib/hooks/useCart';
import { CartContainer, CartItem } from './StyledComponents';

const UserCart = () => {
  const { cartItems, removeItem } = useCart();
  const handleDelete = (id: string) => {
    removeItem.mutate(id);
  };
  return (
    <CartContainer>
      <h1>Cart</h1>
      {!cartItems?.length && <h2>장바구니가 비었습니다</h2>}
      {cartItems?.map((product) => {
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
