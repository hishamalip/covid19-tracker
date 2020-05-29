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
      <div className="container-fluid">
      <Header />
      </div>

      <Switch>
        <Route path="/covid19-tracker">
          <India />
        </Route>

        <Route path="/india">
          <India />
        </Route>

        <Route path="/kerala">
          <Kerala />
        </Route>
    
        <Route path="/world">
          <World />
        </Route>
      </Switch>

    </BrowserRouter>

  );
}

export default App;