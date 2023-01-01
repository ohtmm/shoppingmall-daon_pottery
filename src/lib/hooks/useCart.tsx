import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useContext } from 'react';
import {
  getUserCart,
  removeCartItem,
  setUserCart,
  updateCartItem,
} from '../../api/firebase';
import { TProduct } from '../../pages/Products/NewProducts/NewProducts';
import { AuthContext } from '../context/authContext';

export default function useCart() {
  const queryCleint = useQueryClient();
  const user = useContext(AuthContext);

  const { data: cartItems } = useQuery(['carts', user?.uid || ''], () =>
    getUserCart(user?.uid)
  );

  const removeItem = useMutation(
    (productId: string) => removeCartItem(user?.uid!, productId),
    {
      onSuccess: () => queryCleint.invalidateQueries(['carts', user?.uid]),
    }
  );

  const addItem = useMutation(
    (product: TProduct) => setUserCart(user?.uid!, product),
    {
      onSuccess: () => queryCleint.invalidateQueries(['carts', user?.uid]),
    }
  );

  const updateItem = useMutation(
    (updated: TProduct) => updateCartItem(user?.uid!, updated),
    {
      onSuccess: () => queryCleint.invalidateQueries(['carts', user?.uid]),
    }
  );
  return { cartItems, removeItem, addItem, updateItem };
}
