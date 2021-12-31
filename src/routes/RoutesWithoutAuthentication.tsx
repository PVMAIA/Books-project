import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from '../pages/Login';

const RoutesWithoutAuthentication = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Login />} />
         </Routes>
      </Router>
   );
};

export default RoutesWithoutAuthentication;
