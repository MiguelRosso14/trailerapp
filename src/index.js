import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from "@auth0/auth0-react";

import 'bootswatch/dist/superhero/bootstrap.min.css';

ReactDOM.render(
    <Auth0Provider
    domain="dev-u-sbj-22.us.auth0.com"
    clientId="bTQV1BGqfeoM1khAMKj5FG7HIAHUYjuD"
    redirectUri={window.location.origin}>
    <App />
    </Auth0Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
