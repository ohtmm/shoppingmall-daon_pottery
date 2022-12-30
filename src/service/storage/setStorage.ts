import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../api/firebase';
import { TimageUploaded } from '../../pages/Products/NewProducts/NewProducts';

async function setStorage(
  imageUploaded: TimageUploaded
): Promise<string | null> {
  if (imageUploaded === null) return null;
  const storageRef = ref(storage, `images/${imageUploaded.name}`);
  const uploadTask = await uploadBytesResumable(storageRef, imageUploaded);
  const url = await getDownloadURL(storageRef);
  return url;
}

export default setStorage;
