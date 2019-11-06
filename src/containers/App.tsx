import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import { Provider } from 'react-redux';
import * as css from './App.css';
import Controller from './Controller';

const App = () => {
  console.log("App rendered")
  return (
   <Provider store={store}>
      <Router> 
        <div className={css.main}>
          <Controller/>
        </div>
      </Router>
   </Provider>
  );
}

export default App;
