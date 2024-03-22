import './cssFile.css'
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
window.axios = axios;
const store = createStore(reducers, {}, applyMiddleware(thunk));

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
export default Provider;