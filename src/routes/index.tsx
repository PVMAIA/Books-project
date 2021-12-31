import {
   Routes as RoutesContainer,
   Route,
   useNavigate,
   useLocation,
   Navigate,
} from 'react-router-dom';

import { useAuth } from '../contexts/auth';

import Login from '../pages/Login';

function RequireAuth({ children }: { children: JSX.Element }) {
   const user =
      localStorage.getItem('@App:user') &&
      JSON.parse(String(localStorage.getItem('@App:user')));
   const location = useLocation();

   if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
   }

   return children;
}

function Home() {
   const navigate = useNavigate();
   const { Logout } = useAuth();

   const handleLogout = () => {
      Logout();
      navigate('/login');
   };

   return (
      <div>
         <h1>Home</h1>
         <button type="button" onClick={() => handleLogout}>
            Logout
         </button>
      </div>
   );
}

const Routes = () => {
   return (
      <RoutesContainer>
         <Route path="login" element={<Login />} />
         <Route
            path="home"
            element={
               <RequireAuth>
                  <Home />
               </RequireAuth>
            }
         />
      </RoutesContainer>
   );
};

export default Routes;
