import { getDatabase, onValue, ref } from 'firebase/database';
import { database } from '../../api/firebase';

const getDB = () => {
  const productsRef = ref(database, '/products');
  const snapshot = onValue(productsRef, async (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
};

export default getDB;
