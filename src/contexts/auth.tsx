import {
   createContext,
   FC,
   useContext,
   useEffect,
   useMemo,
   useState,
} from 'react';

import api from '../services/api';

type User = {
   birthdate: string;
   email: string;
   gender: string;
   id: string;
   name: string;
};

interface AuthContextData {
   signed: boolean;
   user: User | null;
   errorLogin: string;
   Login(email: string, password: string): Promise<void>;
   Logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: FC = ({ children }) => {
   const [user, setUser] = useState<User | null>(null);
   const [errorLogin, setErrorLogin] = useState('');

   async function Login(email: string, password: string) {
      const response = await api
         .post('/auth/sign-in', {
            email,
            password,
         })
         .catch((error) => {
            const {
               errors: { status, message },
            } = JSON.parse(error.response.request.response);

            if (!status) {
               setErrorLogin(message);
            }
         });

      if (!response) {
         return;
      }

      setUser(response.data);
      localStorage.setItem('@App:user', JSON.stringify(response.data));
      localStorage.setItem('@App:token', response.headers.authorization);
      localStorage.setItem(
         '@App:refresh-token',
         response.headers['refresh-token'],
      );
   }

   function Logout() {
      setUser(null);

      localStorage.removeItem('@App:user');
      localStorage.removeItem('@App:token');
      localStorage.removeItem('@App:refresh-token');
   }

   const values = useMemo(
      () => ({ signed: Boolean(user), user, errorLogin, Login, Logout }),
      [user, errorLogin],
   );

   useEffect(() => {
      const storagedUser = localStorage.getItem('@App:user');
      const storagedToken = localStorage.getItem('@App:token');

      if (storagedToken && storagedUser) {
         setUser(JSON.parse(storagedUser));
         api.defaults.headers.common.Authorization = storagedToken;
      }
   }, []);

   return (
      <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
   );
};

export function useAuth() {
   const context = useContext(AuthContext);

   return context;
}

export default AuthContext;
