import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';

function render(props) {
    const { container } = props;
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        container ? container.querySelector('#root') :document.getElementById('root')
    );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}
export async function bootstrap() {
    console.log('[react16] react app bootstraped');
}
export async function mount(props) {
    console.log('[react16] props from main framework', props);
    render(props);
    props.onGlobalStateChange((state, prev) => {
        alert('state changed!!!');
        console.log('accepted State: ', state);
        store.dispatch({
            type: 'SET_USER',
            payload:  state.user || {}
        });
    }, true);
    // todo
}
export async function unmount(props) {
    const { container } = props;
    ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}
