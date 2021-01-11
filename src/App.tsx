import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from "@/config/route";

export default () => (
  <div>
    <Router>
      <Switch>
        {Routes.map((item) => (
          <Route path={item.path} exact={item.exact} key={item.path}>
            {item.component}
          </Route>
        ))}
      </Switch>
    </Router>
  </div>
);
