import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../api/firebase';
const getDatabase = () => {
  getDownloadURL(ref(storage, 'images/main_hands2.jpg'));
};

export default getDatabase;
