import { ReactNode, useEffect, useState } from 'react';
import { adminUser, auth } from '../../api/firebase';
import { AuthContext } from './authContext';
import { User } from 'firebase/auth';

type AuthProviderProps = {
  children: ReactNode;
};

export interface updatedUser extends User {
  isAdmin?: boolean;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<updatedUser | null>(null);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      const updatedUser = user ? await adminUser(user) : null;
      setUser(updatedUser);
    });
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
