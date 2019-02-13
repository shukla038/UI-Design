import React, { Fragment } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NotFoundPage from "../NotFoundPage";
import Autofill from "../AutoComplete";
import LandingPage from "../LandingPage";
import TweetInput from "../TweetInput";
import QuizComponent from "../Quiz";
export default function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/auto-fill-component" component={Autofill} />
          <Route exact path="/second-question" component={Autofill} />
          <Route exact path="/third-question" component={TweetInput} />
          <Route exact path="/quiz/:step" component={QuizComponent} />
          <Route exact path="" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}
