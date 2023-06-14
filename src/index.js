import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import ContextProvider from './context/ContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </ContextProvider>);
