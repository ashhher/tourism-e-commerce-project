import React from 'react';
import ReactDOM from 'react-dom';
import './i18n/configs'
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import { Provider } from "react-redux";
import rootStore from "./redux/store";
import axios from "axios";
import { PersistGate } from "redux-persist/integration/react";

axios.defaults.headers['x-icode'] = 'D9538FB9AD51233C';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootStore.store}>
      <PersistGate loading={null} persistor={rootStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);