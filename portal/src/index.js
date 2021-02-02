import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';
import { getState } from "./portalState";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 注册微应用
registerMicroApps([
    {
        name: 'reactApp',
        entry: '//localhost:4001',
        container: '#portal-container',
        activeRule: '/app-react',
    },
    {
        name: 'vueApp',
        entry: '//localhost:4002',
        container: '#portal-container',
        activeRule: '/app-vue',
    },
]);

setDefaultMountApp('/app-react');
// 启动 qiankun
start();



