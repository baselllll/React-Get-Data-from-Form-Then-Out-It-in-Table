import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.css'


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch,NavLink as Link } from 'react-router-dom'
import ErrorCom from './componets/error';
import Users from './componets/Users';
import UserDetail from './componets/User-detail';
import LifeCycle from './componets/basel'
ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
     <Switch>
        <Route exact path='/' component={Users} />
        <Route exact path='/basel' component={LifeCycle} />
        <Route  path='/users' component={Users} />
        <Route exact path='/user/:id' component={UserDetail} />
        <Route path='*' component={ErrorCom} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


