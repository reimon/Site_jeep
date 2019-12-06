import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Main from '../pages/Main';
import Sobre from '../pages/Sobre';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/sobre" component={Sobre} />
  </Switch>
);
export default Routes;
