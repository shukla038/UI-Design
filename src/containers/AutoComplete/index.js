import Autosuggest from "react-autosuggest";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { firtsaction } from "./action";
import { withRouter } from "react-router-dom";

const getSuggestionValue = suggestion => suggestion.item_value;

const renderSuggestion = suggestion => <div>{suggestion.item_value}</div>;

class Example extends React.Component {
  state = {
    value: "",
    suggestions: []
  };

  getSuggestions = value => {
    var simpleData = this.props.simplereducer.data || null;

    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : simpleData.filter(
          lang =>
            lang.item_value.toLowerCase().slice(0, inputLength) === inputValue
        );
  };
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  componentDidMount() {
    const { dispatch, firtsaction } = this.props;
    return dispatch(firtsaction());
  }
  redirectToFirst = () => {
    const { history, match } = this.props;
    this.props.match.path === "/second-question"
      ? history.push("/third-question")
      : history.push("/second-question");
  };
  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Enter the city name",
      value,
      onChange: this.onChange
    };
    return (
      <div className="container-fluid landing--component-container">
        <div className="container">
          <div className="row mx-auto landing--component--wrapper">
            <div className="col text--heading mx-auto">
              <div className="row">
                <div className="col">
                  <span className="header--content">
                    React Autofill Component
                  </span>
                </div>
              </div>
              {this.props.match.path !== "/second-question" ? (
                <div className="row autofill-component-wrapper mx-auto">
                  <div className="col-4 autofill-component mx-auto">
                    <form>
                      <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={
                          this.onSuggestionsFetchRequested
                        }
                        onSuggestionsClearRequested={
                          this.onSuggestionsClearRequested
                        }
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={inputProps}
                      />
                    </form>
                  </div>
                </div>
              ) : (
                <div className="row autofill-component-wrapper mx-auto">
                  <div className="col-6 text-center autofill-component mx-auto">
                    <span>
                      This Project Contains All the Configuration which is
                      Mentioned in Doc
                    </span>
                  </div>
                </div>
              )}

              <div className="row">
                <div className="col button-wrapper">
                  <button
                    onClick={this.redirectToFirst}
                    title="View Quotes"
                    class="navigation--button navigartion--button--orange navigartion--button--large mx-auto"
                  >
                    Click Here to see next answer{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state.toJS()
});
const mapDispatchToProps = dispatch => ({
  dispatch,
  firtsaction
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Example));
