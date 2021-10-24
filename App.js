
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Login from './pages/Contributors.jsx';
import Dataset from './pages/Dataset.jsx';
import Contributors from './pages/Contributors.jsx';
import Translated from './pages/Translated.jsx';
import Profile from './pages/Profile.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';


  class App extends Component {
    render () {
    return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/Contributors" component={Contributors}/>
        <Route path="/Dataset" component={Dataset}/>
        <Route path="/Translated" component={Translated}/>
        <Route path="/Profile" component={Profile}/>
      </div>
    </Router>
    );
  }
}
export default App;
