import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import main from './pages/main';
import configureStore from './configureStore';
require('moment/locale/es.js');

const store = configureStore();

ReactDOM.render(
    <Provider store = {store}>
        <main.Container />
    </Provider>
, document.getElementById('root'));
