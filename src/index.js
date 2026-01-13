import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { GetFavourites } from './context/FavouritesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <GetFavourites>
          <App />
      </GetFavourites>
  </React.StrictMode>
);

