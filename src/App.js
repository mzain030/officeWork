import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import Modal from './components/Modal';
import { Auth0Provider } from '@auth0/auth0-react';

function App() {
  return (
    <div className="App">
      <Auth0Provider
    domain="dev-gy5gpypwdzwoaghb.us.auth0.com"
    clientId="uwFacj5B2qDPdAw8OPPQeAaAUpHLoo5U"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <LoginForm/>
  </Auth0Provider>
  {/* <Modal/> */}
    </div>
  );
}

export default App;
