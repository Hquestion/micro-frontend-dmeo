import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerMicroApps, start, loadMicroApp } from 'qiankun';

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

registerMicroApps([
    {
        name: 'appHeader',
        entry: '//localhost:5002',
        container: '#app-header',
        activeRule: '/app-react',
    },
    {
        name: 'appFooter',
        entry: '//localhost:5001',
        container: '#app-footer',
        activeRule: '/app-vue',
    },
]);
// 启动 qiankun
start({
    singular: false
});

loadMicroApp({
    name: 'appHeader',
    entry: '//localhost:5002',
    container: '#app-header',
}, {

});

loadMicroApp({
    name: 'appFooter',
    entry: '//localhost:5001',
    container: '#app-footer',
})
