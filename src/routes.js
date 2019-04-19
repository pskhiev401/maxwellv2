import React from "react";
import { Switch, Route } from "react-router-dom";

// *** COMPONENTS ***
import Landing from "./Components/landing/Landing";
import Admin from "./Components/admin/Admin";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/admin" component={Admin} />
    <Route
      path="*"
      render={() => (
        <img
          src="https://cdn-images-1.medium.com/max/1600/1*qdFdhbR00beEaIKDI_WDCw.gif"
          alt="whooopies"
        />
      )}
    />
  </Switch>
);
