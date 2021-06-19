import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.css'


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch,NavLink as Link } from 'react-router-dom'
import Home from './componets/home';
import Profile from './componets/profile';
import ErrorCom from './componets/error';
ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
     <div style={{ display:'flex',justifyContent:'space-between',marginLeft:'20px',paddingLeft:'600px',fontSize:'40px' }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link exact activeClassName='active' to='/'>Home</Link>
                  &nbsp;&nbsp;&nbsp;
                </li>
                
                <li className="nav-item">
                  <Link to='/profile' activeClassName='active'>Profile</Link>
                  &nbsp;&nbsp;&nbsp;
                </li>
                <li className="nav-item">
                  <Link to='/error' activeClassName='active'>Error</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Switch>
        <Route path='/profile' component={Profile} />
        <Route exact path='/' component={Home} />
        <Route path='*' component={ErrorCom} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


