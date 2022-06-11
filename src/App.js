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
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="description" content="Automatically dub videos into other languages."/>
        <title>DeepDub | Videos for everyone.</title>
        <meta name="og:title" content="DeepDub | 🗣️ Videos for everyone."/>
        <meta name="og:description" content="Automatically dub videos into other languages"/>
        <meta name="og:image" content="../public/thumbnail.png"/>
      </head>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
