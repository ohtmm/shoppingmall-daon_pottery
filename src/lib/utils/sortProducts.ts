import { TProduct } from '../../pages/Products/NewProducts/NewProducts';

export const sortProducts = (
  products?: TProduct[] | null,
  categoryName?: string
) => {
  const filtered = products?.filter(
    (product) => product.category === categoryName
  );
  return filtered;
};
