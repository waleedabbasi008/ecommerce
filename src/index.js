import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-toastify/dist/ReactToastify.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ToastContainer } from 'react-toastify';
ReactDOM.render(
  <BrowserRouter>
    <ToastContainer />
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
