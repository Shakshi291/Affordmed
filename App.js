// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllTrains from './AllTrains';
import SingleTrain from './SingleTrain';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <AllTrains />
        </Route>
        <Route path="/single-train/:trainNumber">
          <SingleTrain />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
