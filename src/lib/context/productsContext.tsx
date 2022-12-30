import React, { Dispatch, SetStateAction } from 'react';
import { TProduct } from '../../pages/Products/NewProducts/NewProducts';

export type TProductsContext = {
  productsDB: TProduct[] | null;
  productsInCart: TProduct[] | null;
  setProductsInCart: React.Dispatch<SetStateAction<TProduct[] | null>>;
};
export const ProductsContext = React.createContext<TProductsContext | null>(
  null
);
