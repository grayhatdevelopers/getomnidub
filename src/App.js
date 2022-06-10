import React from 'react';
import './App.css';
import "./components/FullScreenVideo/fullscreenvideo.css";

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import NotFound from './pages/notfound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
