import AppRoutes from './app';
import AuthRoutes from './auth';

const Routes = () => {
   const user =
      localStorage.getItem('@App:user') &&
      JSON.parse(String(localStorage.getItem('@App:user')));

   return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
