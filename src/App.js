import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Components/Header';
import India from './Components/India';
import Kerala from './Components/Kerala';
import World from './Components/World';

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/covid19-tracker/">
          <Header />
          <India />
        </Route>

        <Route path="/covid19-tracker/kerala/">
          <Header />
          <Kerala />
        </Route>

        <Route path="/covid19-tracker/world/">
          <Header />
          <World />
        </Route>
      </Switch>

    </BrowserRouter>

  );
}

export default App;