import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import SubmitCase from './components/SubmitCase/SubmitCase';


function Routes() {

  const appRoutes = [
    {
        path: "/",
        component: Login
    },
    {
        path: '/submitCase',
        component: SubmitCase
    }
  ];
  return (
        <BrowserRouter>
            <Switch>
                    <Route exact path="/" component={Login}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route path="/submitCase" component={SubmitCase}></Route>
                    <Route path="*" component={NotFound}></Route>
            </Switch>
            
        </BrowserRouter>
    )
}

export default Routes