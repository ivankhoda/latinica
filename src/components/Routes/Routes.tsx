import { createBrowserHistory } from "history";
import * as React from "react";
import { Route, Router, Switch } from "react-router-dom";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
const history = createBrowserHistory();

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </Router>
  );
};

export default Routes;
