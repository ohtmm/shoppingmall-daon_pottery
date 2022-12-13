import { TProduct } from '../../pages/Products/NewProducts/NewProducts';

const setLocalStorage = (products: TProduct[]) => {
  if (products) {
    if (localStorage.getItem('cart')) {
      const items = JSON.parse(localStorage.getItem('cart')!);
      const updated = items.concat(products);
      localStorage.setItem('cart', JSON.stringify(updated));
    } else {
      localStorage.setItem('cart', JSON.stringify(products));
    }
  }
  return;
};

export default setLocalStorage;
