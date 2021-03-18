import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import LmsPage from "../pages/LmsPage";
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage";
import Error404Page from "../pages/error404-page"

export default function AppRouter() {
  return (
    <Router>
       <Switch>
         <Route exact path="/" component={LmsPage} />
         <Route exact path="/register" component={RegisterPage} />
         <Route exact path="/admin" component={LoginPage} />
         <Route exact path="/dash" component={DashboardPage} />
         <Route exact path="*" component={Error404Page} />
       </Switch>
    </Router>
  );
}
