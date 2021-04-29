import { BrowserRouter, Route, Switch } from 'react-router-dom';

import React from 'react';
import Lists from './lists';
import List from './list';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/list/:id" component={List} />
          <Route path="/" component={Lists} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
