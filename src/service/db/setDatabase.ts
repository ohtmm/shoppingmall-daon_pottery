import { getDatabase, ref, set } from 'firebase/database';
import { TProduct } from '../../pages/Products/NewProducts/NewProducts';

const setDatabase = (product: TProduct) => {
  const db = getDatabase();
  set(ref(db, 'products/' + product.id), product);
};

export default setDatabase;
