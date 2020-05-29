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
      <div>
        <Header />
      </div>
      <Switch>
        <Route exact path="/covid19-tracker/">
          <World />
        </Route>

        <Route path="/covid19-tracker/india/">
          <India />
        </Route>

        <Route path="/covid19-tracker/kerala/">
          <Kerala />
        </Route>
      </Switch>

    </BrowserRouter>

  );
}

export default App;
