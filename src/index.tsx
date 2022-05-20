import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from "react-redux";
import { createGlobalStore } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createGlobalStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
