import { Routes as RoutesContainer, Route } from 'react-router-dom';
import Login from '../pages/Login';

const AuthRoutes = () => {
   return (
      <RoutesContainer>
         <Route path="login" element={<Login />} />
         <Route path="*" element={<Login />} />
      </RoutesContainer>
   );
};

export default AuthRoutes;
