/*
 * @Author: houxiaoling 
 * @Date: 2020-05-08 11:15:42 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-07-03 18:00:20
 */


import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import App from './App'

// import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import './index.scss'

import configureStore from "./Store/configStore";

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={configureStore()}>
    <App/>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
