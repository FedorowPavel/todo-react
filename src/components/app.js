import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Lists from './lists';
import List from './list';
import PrivateRoute from './private-route';
import Header from './header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <PrivateRoute path="/list/:id" component={List} />

          <PrivateRoute path="/" component={Lists} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
