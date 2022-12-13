import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../api/firebase';

export const SignInGoogle = () => {
  const googleProvider = new GoogleAuthProvider();
  signInWithPopup(auth, googleProvider)
    .then((data) => {
      console.log(data);
    })
    .catch((e) => console.log('로그인이 되지 않았습니다', e));
};

export const SignOut = () => {
  signOut(auth)
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
};
