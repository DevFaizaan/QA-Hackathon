import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import PropTypes from "prop-types";

import HomePage from './components/routes/HomePage';
import ProfilePage from './components/routes/ProfilePage';
import DriverPage from './components/routes/DriverPage'
import ManagerPage from './components/routes/ManagerPage';
import NotFound from './components/routes/NotFound';

function App() {
  return (
    <div className="App">
      <Auth0Provider
      domain="dev-exsw7bob.us.auth0.com"
      clientId="EzyZPuNnxkJbd7cQsiPnpKvFhvV8KZbA"
      redirectUri={window.location.origin}
      >

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/driver" element={<DriverPage />} /> 
            <Route path="/manager" element={<ManagerPage />} />
          </Routes>
        </BrowserRouter>

      </Auth0Provider >
    </div>
  );
}

// App.propTypes = {
//   domain: PropTypes.string.isRequired,
//   clientId: PropTypes.string.isRequired,
// };

export default App;
