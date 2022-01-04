import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/auth';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
   return (
      <AuthProvider>
         <Router>
            <GlobalStyle />
            <Routes />
         </Router>
      </AuthProvider>
   );
}

export default App;
