import { AuthContext } from '../lib/context/authContext';
import { useContext } from 'react';
import Home from '../pages/Home';

type PrivateRouterProps = {
  children: React.ReactNode | undefined;
};

const PrivateRouter = ({ children }: PrivateRouterProps) => {
  const currentUser = useContext(AuthContext);
  if (!currentUser) {
    return <Home />;
  }
  return children;
};

export default PrivateRouter;
