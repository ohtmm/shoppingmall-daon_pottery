import { ReactNode, useEffect, useState } from 'react';
import { auth } from '../../api/firebase';
import { AuthContext } from './authContext';
import { User } from 'firebase/auth';

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log('구독', user);
      setUser(user);
    });
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
