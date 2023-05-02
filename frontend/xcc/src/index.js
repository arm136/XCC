import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-ud8nctj0uq4qg6jb.us.auth0.com"
    clientId="azhk8NYtjtqhxFto3zRqvMxgDGOGo2Et"
    authorizationParams={{
    redirect_uri: `${window.location.origin}/Resources`
    }}>
    <App />
  </Auth0Provider>
);


