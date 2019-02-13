import React, { Fragment } from "react";
import { Link, history } from "react-router-dom";
import Loader from "../../components/Loader";

class LandingPage extends React.PureComponent {
  redirectToFirst = () => {
    this.props.history.push("/auto-fill-component");
  };
  render() {
    const { history } = this.props;
    return (
      <div className="container-fluid landing--component-container">
        <div className="container">
          <div className="row mx-auto landing--component--wrapper">
            <div className="col text--heading mx-auto">
              <div className="row">
                <div className="col">
                  <span className="header--content">
                   dvjhghjfgfjsgfsjdh
                  </span>
                </div>
              </div>
              <Loader />
              <div className="row">
                <div className="col button-wrapper">
                  <button
                    onClick={this.redirectToFirst}
                    title="View Quotes"
                    class="navigation--button navigartion--button--orange navigartion--button--large mx-auto"
                  >
                    Click Here{" "}
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

export default LandingPage;
