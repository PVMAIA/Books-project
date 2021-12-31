import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Home() {
   return <div>Home</div>;
}

const RoutesWithAuthentication = () => {
   return (
      <Router>
         <Routes>
            <Route path="/home" element={<Home />} />
         </Routes>
      </Router>
   );
};

export default RoutesWithAuthentication;
