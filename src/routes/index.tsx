import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Repository from '../pages/Repository'
import Deshboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Deshboard} />
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
)

export default Routes;
