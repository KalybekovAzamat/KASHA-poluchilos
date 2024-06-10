import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Clients from './pages/Clients';
import Header from './components/Header';
import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Catalog} />
        <Route path="/clients" component={Clients} />
      </Switch>
    </Router>
  );
}

export default App;

