import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './redux/store';
import App from './App';
import { Provider } from "react-redux"
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


