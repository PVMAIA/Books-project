import { Routes as RoutesContainer, Route } from 'react-router-dom';
import Home from '../pages/Home';

const AppRoutes = () => {
   return (
      <RoutesContainer>
         <Route path="home" element={<Home />} />
         <Route path="*" element={<Home />} />
      </RoutesContainer>
   );
};

export default AppRoutes;
