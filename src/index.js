import React from 'react';
import ReactDOM from 'react-dom';
// learn: https://reacttraining.com/react-router/web/api/Route/component
// learn: https://juejin.im/post/5be2993df265da611e4d220c
// 哪里需要用到路由，哪里引入定义 
import { HashRouter as Router } from 'react-router-dom'; 
import './styles/base.css';
import App from './views/App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
