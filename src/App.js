import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={ Home } />
    </Switch>
  );
}

export default App


