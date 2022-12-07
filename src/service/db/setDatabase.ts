import { getDatabase, ref, set } from 'firebase/database';
import { RepositoryImpl } from '../../api/repository';
import { TProduct } from '../../pages/Products/NewProducts/NewProducts';

const repo = new RepositoryImpl();
const setDatabase = (product: TProduct) => {
  const db = getDatabase();
  set(ref(db, 'products/' + `${repo.dataLength++}`), product);
};

export default setDatabase;
