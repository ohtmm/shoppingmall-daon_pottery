import { ref, onValue } from 'firebase/database';
import { TProduct } from '../pages/Products/NewProducts/NewProducts';
import { database } from './firebase';

interface Repository {
  readData: (onUpdate: (data: TProduct[]) => void, productId?: string) => void;
}
export class RepositoryImpl implements Repository {
  dataLength = 0;
  readData(onUpdate: (data: TProduct[]) => void) {
    const dbRef = ref(database, '/products');
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      const dataArr = [];
      for (const idx in data) {
        dataArr.push(data[idx]);
        console.log(dataArr);
      }
      this.dataLength = dataArr.length;
      data && onUpdate(data);
    });
  }
}

export default Repository;
