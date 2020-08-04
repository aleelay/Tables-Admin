import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import  { store } from './actions/store';
import ButterToast, { POS_RIGHT,POS_TOP } from 'butter-toast';

ReactDOM.render(
  <Provider store={store}>
    <App />
    <ButterToast position={{vertical:POS_TOP,horizontal:POS_RIGHT}}/>
  </Provider>,
  document.getElementById('root')
);

