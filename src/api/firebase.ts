import { initializeApp } from 'firebase/app';
import { getAuth, User } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getDatabase, ref, get, set, remove } from 'firebase/database';
import { updatedUser } from '../lib/context/authProvider';
import { TProduct } from '../pages/Products/NewProducts/NewProducts';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);

export async function adminUser(user: User): Promise<updatedUser | User> {
  return get(ref(database, 'admins')).then((snapshot) => {
    if (snapshot.exists()) {
      const admins = snapshot.val();
      const isAdmin = admins.includes(user?.uid);
      return { ...user, isAdmin };
    }
    return user;
  });
}

export async function setUserCart(uid: string, product: TProduct) {
  return set(ref(database, `carts/${uid}/${product.id}`), product);
}

export async function getUserCart(uid?: string): Promise<TProduct[]> {
  return get(ref(database, `carts/${uid}`)).then((snapshot) => {
    if (snapshot.exists()) {
      const items = snapshot.val();
      const cart = Object.values(items);
      return cart as TProduct[];
    }
    return [];
  });
}

export async function removeCartItem(uid: string, productId: string) {
  return remove(ref(database, `carts/${uid}/${productId}`));
}

export async function getProductsAll(): Promise<TProduct[]> {
  return get(ref(database, 'products')).then((snapshot) => {
    const items = snapshot.val();
    return items;
  });
}

export async function setNewProduct(newProduct: TProduct) {
  const currentProducst = await getProductsAll();
  return set(ref(database, `/products/${currentProducst.length}`), newProduct);
}

export async function getMainImages() {
  return get(ref(database, 'main')).then((snapshot) => {
    const items = snapshot.val();
    return items;
  });
}
