import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import SubmitCase from './components/SubmitCase/SubmitCase';
import ViewAllCases from "./components/ViewAllCases/ViewAllCases";
import ViewCase from "./components/ViewCases/ViewCase";


function Routes() {

  const appRoutes = [
    {
        path: "/",
        component: Login
    },
    {
        path: '/submitCase',
        component: SubmitCase
    },
    {
        path: '/viewAllCases',
        component: ViewAllCases
    },
    {
        path: '/ViewCase',
        component: ViewCase
    }
  ];
  return (
        <BrowserRouter>
            <Switch>
                    <Route exact path="/" component={Login}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route path="/submitCase" component={SubmitCase}></Route>
                    <Route path="/viewAllCases" component={ViewAllCases}></Route>
                    <Route path="/ViewCase" component={ViewCase}></Route>
                    <Route path="*" component={NotFound}></Route>
            </Switch>
            
        </BrowserRouter>
    )
}

export default Routes