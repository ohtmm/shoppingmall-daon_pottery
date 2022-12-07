import { initializeApp } from 'firebase/app';
import { getAuth, User } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getDatabase, ref, get } from 'firebase/database';
import { updatedUser } from '../lib/context/authProvider';

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
