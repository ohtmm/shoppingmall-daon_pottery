import React, { SetStateAction } from 'react';
import { Dispatch } from 'react';
import { TProduct } from '../../pages/Products/NewProducts/NewProducts';

export interface IProductsContext {
  products: TProduct[] | null;
  setProducts: Dispatch<SetStateAction<TProduct[] | null>>;
}
export const ProductsContext = React.createContext<IProductsContext | null>(
  null
);
