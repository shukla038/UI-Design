import React, { Fragment } from "react";
import { Link, history } from "react-router-dom";
import Loader from "../../components/Loader";
import { Field, reduxForm } from "redux-form/immutable";
import { renderInput } from "../Form";
import validate from "./validate";
import warn from "./warn";

class TweetInput extends React.PureComponent {
  redirectToFirst = () => {
    this.props.history.push("/auto-fill-component");
  };

  submitFunc = () => {
    alert("Your tweet submitted !");
  };

  render() {
    const { history, handleSubmit } = this.props;
    return (
      <div className="container-fluid landing--component-container">
        <div className="container">
          <div className="row mx-auto landing--component--wrapper">
            <div className="col text--heading mx-auto">
              <div className="row">
                <div className="col">
                  <span className="header--content">Tweet Input </span>
                </div>
              </div>
              <form onSubmit={handleSubmit(this.submitFunc)}>
                <div className="row ">
                  <div className="col-4 mx-auto">
                    <Field
                      name="firstName"
                      component={renderInput}
                      type="text"
                      label="Text Value"
                      id="firstName--box"
                      required
                    />
                  </div>
                </div>
                <div className="row ">
                  <div className="col-4 mx-auto">
                    <Field
                      name="radio--1"
                      component={renderInput}
                      type="radio"
                      label="Text Value"
                      id="firstName--box"
                      required
                    />
                  </div>
                  <div className="col-4 mx-auto">
                    <Field
                      name="radio--1"
                      component={renderInput}
                      type="radio"
                      label="Text Value"
                      id="firstName--box"
                      required
                    />
                  </div>
                </div>

                <div className="submit---button-wrapper">
                  <button
                    type="submit"
                    className="btn btn-primary mx-auto d-block "
                  >
                    {" "}
                    Submit{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
TweetInput = reduxForm({
  form: "tweetcomponent",
  validate,
  warn
})(TweetInput);
export default TweetInput;
