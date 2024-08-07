import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StytchB2BProvider } from '@stytch/react/b2b';
import { StytchB2BUIClient } from '@stytch/vanilla-js/b2b';

// Step (3): Create the stytch B2B UI client
/* ... */

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* ... Step (3.1): Integrate StytchB2BProvider into Your App... */}
      <App />
    {/* ... Step (3.1): Integrate StytchB2BProvider into Your App ... */}
  </React.StrictMode>
);

