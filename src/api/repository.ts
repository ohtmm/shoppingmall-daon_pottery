import { ref, onValue } from 'firebase/database';
import { TProduct } from '../pages/Products/NewProducts/NewProducts';
import { database } from './firebase';

interface Repository {
  countData: () => void;
  readData: (onUpdate: (data: TProduct[]) => void, productId?: string) => void;
}
export class RepositoryImpl implements Repository {
  dataLength = 0;
  countData() {
    const dbRef = ref(database, '/products');
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      this.dataLength = Object.keys(data).length;
    });
  }
  readData(onUpdate: (data: TProduct[]) => void) {
    const dbRef = ref(database, '/products');
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();

      data && onUpdate(data);
    });
  }
}

export default Repository;
