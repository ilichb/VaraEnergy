import React from 'react';
import { App } from './app';
import 'tailwindcss/tailwind.css';
import ReactDOM from 'react-dom/client';
import dotenv from 'dotenv';

import { Provider } from 'react-redux';

import {store} from './store/index';

// Cargar variables de entorno desde el archivo .env
dotenv.config();


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </Provider>
 
);
