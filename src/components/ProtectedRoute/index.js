import { Route, Navigate } from 'react-router-dom';
import { useUserContext } from '../../UserContext';

const ProtectedRoute = (props) => {
  const { loggedIn } = useUserContext();

  if (loggedIn) return <Route {...props} />;
  return <Navigate to="/" />;
};

export default ProtectedRoute;
