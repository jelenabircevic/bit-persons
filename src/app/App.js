import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Footer from './partials/Footer';
import './App.css';

const App = props => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </Switch>
      <Footer copy="2018 Copyright jelenabircevic" />
    </div>
  )
}

export default App