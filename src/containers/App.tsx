import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import store from '../redux/store';
import { Provider } from 'react-redux';
import * as css from './App.css';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';

const App = () => {
  return (
   <Provider store={store}>
      <Router>
        <div className={css.main}>
          {localStorage.getItem('ToDo-token') ? <Dashboard/> : <Route path="/" component= {LandingPage}/>}
        </div>
      </Router>
   </Provider>
  );
}

export default App;
