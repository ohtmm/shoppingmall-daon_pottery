import React, { SetStateAction } from 'react';
import { Dispatch } from 'react';
import { TProduct } from '../../pages/Products/NewProducts/NewProducts';

export const ProductsContext = React.createContext<TProduct[] | null>(null);
