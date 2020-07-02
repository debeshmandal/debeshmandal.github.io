import React from 'react';
import Header from './components/header'
import Footer from './components/footer'


import { Route } from "react-router-dom";

import Home from './components/home';
import CV from './components/cv';

function App(props) {
  return ( 
    <div>
      <Header />
      <Route exact={true} path="/" component={Home} />
      <Route path="/cv" component={CV} />
      <Footer />
    </div>);
}

export default App;
