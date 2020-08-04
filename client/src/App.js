import React from 'react';
import './App.css';
import Tables from './components/Tables';
import { Provider } from 'react-redux';
import  { store } from './actions/store';
import ButterToast,{ POS_RIGHT,POS_TOP } from 'butter-toast';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div className="container">
        <Tables />
        </div>
        <ButterToast position={{vertical:POS_TOP,horizontal:POS_RIGHT}}/>
      </Provider>
    </div>
  );
}

export default App;
