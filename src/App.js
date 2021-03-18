import React from 'react';

import MainPage from './MainPage';
import AboutMe from './AboutMe';
import Contacts from './Contacts';
import Skills from './Skills';
import Portfolio from './Portfolio';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route path='/about-me' component={AboutMe}/>
        <Route path='/contacts' component={Contacts}/>
        <Route path='/skills' component={Skills}/>
        <Route path='/portfolio' component={Portfolio}/>
      </Switch>
    </Router>
  );
}

export default App;
