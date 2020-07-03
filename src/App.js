import React from 'react';
import Header from './components/header'
import Footer from './components/footer'


import { Route } from "react-router-dom";

import Home from './components/home';
import CV from './components/cv';
import Games from './components/games'

function App() {
  return ( 
    <div>
      <Header />
      <Route exact={true} path="/" component={Home} />
      <Route path="/cv" component={CV} />
      <Route path="/games" component={Games} />
      <Footer />
    </div>);
}

export default App;
