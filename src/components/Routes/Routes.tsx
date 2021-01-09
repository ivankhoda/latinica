import { createBrowserHistory, createHashHistory } from "history";
import * as React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
const history = createBrowserHistory();
const hashHistory = createHashHistory();
const WebPage = "https://ivankhoda.github.io/latinica";
const Routes = () => {
  return (
    <HashRouter basename={WebPage}>
      <Switch>
        <Route path={`/about`} component={About} />
        <Route path={`/contacts`} component={Contacts} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
