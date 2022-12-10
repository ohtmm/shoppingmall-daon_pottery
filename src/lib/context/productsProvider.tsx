import { ContextProviderProps } from './authProvider';
import { ProductsContext } from './productsContext';
import { useState } from 'react';
import { TProduct } from '../../pages/Products/NewProducts/NewProducts';
import { useEffect } from 'react';
import { RepositoryImpl } from '../../api/repository';

const repo = new RepositoryImpl();

const ProductProvider = ({ children }: ContextProviderProps) => {
  const [productsDB, setProductsDB] = useState<TProduct[] | null>(null);
  const [productsInCart, setProductsInCart] = useState<TProduct[] | null>([]);
  useEffect(() => {
    repo.readData(setProductsDB);
  }, []);

  const data = {
    productsDB,
    productsInCart,
    setProductsInCart,
  };
  return (
    <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
  );
};

export default ProductProvider;
