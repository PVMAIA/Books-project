import {
   Routes as RoutesContainer,
   Route,
   useLocation,
   Navigate,
} from 'react-router-dom';

import Home from '../pages/Home';

import Login from '../pages/Login';

function HandleAuth({ children }: { children: JSX.Element }) {
   const path = window.location.pathname;
   const user =
      localStorage.getItem('@App:user') &&
      JSON.parse(String(localStorage.getItem('@App:user')));
   const location = useLocation();

   if (user && path === '/') {
      return <Navigate to="/home" state={{ from: location }} replace />;
   }

   if (!user) {
      return <Navigate to="/" state={{ from: location }} replace />;
   }

   return children;
}

const Routes = () => {
   return (
      <RoutesContainer>
         <Route
            path="/"
            element={
               <HandleAuth>
                  <Login />
               </HandleAuth>
            }
         />
         <Route
            path=":generic"
            element={
               <HandleAuth>
                  <Home />
               </HandleAuth>
            }
         />
         <Route
            path="home"
            element={
               <HandleAuth>
                  <Home />
               </HandleAuth>
            }
         />
      </RoutesContainer>
   );
};

export default Routes;
