import React, { Fragment } from "react";

import { Field, reduxForm } from "redux-form/immutable";
import { connect } from "react-redux";
import { customRadio } from "../Form";
import QuestionData from "./questions.json";
import { formValueSelector } from "redux-form";
import { change } from "redux-form/immutable";
import { dispatch } from "rxjs/internal/observable/pairs";

class LandingComponent extends React.Component {
  goToNext = () => {
    this.props.history.push("/quiz/2");
  };
  render() {
    return (
      <div>
        <ul>
          Instruction:
          <li>
            Total number of questions : <strong>20</strong>.
          </li>
          <li>
            {" "}
            Time alloted : <strong>30 minutes</strong>.
          </li>
          <li>Each question carry 1 mark, no negative marks.</li>
          <li>DO NOT refresh the page.</li>
          <li>All the best :-).</li>
        </ul>
        <div className="row">
          <div className="col-3 mx-auto">
            <button onClick={this.goToNext}>Start Test</button>
          </div>
        </div>
      </div>
    );
  }
}

class QuizResultPage extends React.Component {
  render() {
    const { formDataQuiz } = this.props;
    const attemptedQuestions =
      formDataQuiz.form.quizComponent && formDataQuiz.form.quizComponent.values
        ? Object.keys(formDataQuiz.form.quizComponent.values).length
        : null;
    const correctAnswers =
      formDataQuiz.form.quizComponentform &&
      formDataQuiz.form.quizComponentform.values
        ? Object.values(formDataQuiz.form.quizComponentform.values)
        : null;
    const arrayLength = formDataQuiz.form.quizComponentform
      ? correctAnswers.filter(item => item === "correct").length
      : null;
    return (
      <div>
        <h1>Result</h1>
        <strong>Attempted Questions :</strong>
        {attemptedQuestions}
        <br />
        <strong>Correct Answers :</strong> {arrayLength}
      </div>
    );
  }
}

class QuizComponent extends React.PureComponent {
  state = {
    pageData: undefined,
    arrayLengthState: ""
  };
  redirectToFirst = () => {
    this.props.history.push("/auto-fill-component");
  };

  nextPageFunc = () => {
    const { match } = this.props;
    this.refs.hCref.scrollIntoView();
    this.props.history.push(`/quiz/${parseInt(match.params.step) + 1}`);
  };
  submitFunc = () => {
    alert("Are You sure want to submit");
    this.props.history.push(`/quiz/${5}`);
  };
  componentDidMount() {
    const { formDataQuiz, match } = this.props;
    this.dataFunc(this.props.match);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.match.url != nextProps.match.url) {
      this.dataFunc(nextProps.match);
    }
  }
  dataFunc = match => {
    switch (match.params.step) {
      case "2":
        this.setState({ pageData: QuestionData.QuizQuestionsPage1 });
        break;
      case "3":
        this.setState({ pageData: QuestionData.QuizQuestionsPage2 });
        break;
      case "4":
        this.setState({ pageData: QuestionData.QuizQuestionsPage3 });
        break;
      default:
    }
  };

  render() {
    const { history, handleSubmit, match, dispatch, formDataQuiz } = this.props;

    return (
      <div ref="hCref" className="container-fluid landing--component-container">
        <div className="container">
          <div className="row mx-auto landing--component--wrapper">
            <div
              className={`col text--heading mx-auto quiz---component ${
                match.params.step === "5" ? "d-none" : ""
              }`}
            >
              {match.params.step === "1" ? (
                <LandingComponent history={history} />
              ) : match.params.step !== "5" ? (
                <Fragment>
                  <div className="row">
                    <div className="col">
                      <span className="header--content">Questions </span>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit(this.submitFunc)}>
                    {this.state.pageData && this.state.pageData.length
                      ? this.state.pageData.map((item, index) => (
                          <div
                            id={index}
                            key={`quiz--${index}`}
                            className="row"
                          >
                            <div className="col mx-auto">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item.question
                                }}
                              />
                              {item.options.map((childItem, childIndex) => {
                                return (
                                  <Field
                                    name={`radio--${
                                      match.params.step
                                    }--name--${index}`}
                                    component={customRadio}
                                    type="radio"
                                    label={childItem.answer}
                                    id={`radio--id--${
                                      match.params.step
                                    }--${index}--${childIndex}`}
                                    value={childItem.answer}
                                    status={childItem.status}
                                    onChange={() => {
                                      console.log(childItem.status);
                                      dispatch(
                                        change(
                                          "quizComponentform",
                                          `radio--${
                                            match.params.step
                                          }--name--${index}`,
                                          childItem.status
                                        )
                                      );
                                    }}
                                  />
                                );
                              })}
                            </div>
                          </div>
                        ))
                      : ""}
                    <div className="submit---button-wrapper">
                      {this.props.match.params.step === "4" ? (
                        <button
                          type="submit"
                          className="btn btn-primary mx-auto d-block "
                        >
                          Submit
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  </form>
                  <div className="submit---button-wrapper">
                    {this.props.match.params.step !== "4" ? (
                      <button
                        onClick={this.nextPageFunc}
                        className="btn btn-primary mx-auto d-block "
                      >
                        Next
                      </button>
                    ) : null}
                  </div>
                  {""}
                </Fragment>
              ) : (
                ""
              )}
            </div>
            {match.params.step === "5" ? (
              <QuizResultPage formDataQuiz={formDataQuiz} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}
QuizComponent = reduxForm({
  form: "quizComponent"
})(QuizComponent);
const selector = formValueSelector("quizComponent");
export default connect(state => {
  const formDataQuiz = state.toJS();
  return {
    formDataQuiz
  };
})(QuizComponent);
