import { useStytchMemberSession } from '@stytch/react/b2b';

import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react'


const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { session } = useStytchMemberSession();

  // if you try to login into a page you are not logged in then
  // it will redirect you to the home page.
  if (!session) return <Navigate to='/' replace />

  return <>{children}</>;
}

export default PrivateRoute;