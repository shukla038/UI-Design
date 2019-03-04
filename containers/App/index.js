import React, { Fragment } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NotFoundPage from "../NotFoundPage";
import LandingPage from "../LandingPage";
export default function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/landing-page" component={LandingPage} />

          <Route exact path="" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}
