import React from 'react';

import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



const App = ()=> {
  
  return(
    <Router>
        <Switch>
          <Route exact path='/' component={HomeSection}/>
          
        
          <Route path='/About' component={AboutSection} />
        
          <Route path='/Contact' component={ContactSection}/>
          
        </Switch>
    </Router>
  )
}

export default App;