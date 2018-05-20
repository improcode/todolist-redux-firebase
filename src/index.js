import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import database from './firebase'
import Auth from './components/Auth'

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Auth>
                <App/>
            </Auth>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
