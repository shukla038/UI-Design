import React from "react";
import MailImage from "../../images/shape-2.svg";
import ButtonArrow from "../../images/shape-1.svg";
import PageImage from "../../images/vector-smart-object.png";
import OneTabImage from "../../images/shape-1-1.svg";
import ButtonArrowTwo from "../../images/arrow.svg";
import FeatureOneImage from "../../images/feature-one.svg";
import FeatureTwoImage from "../../images/feature-two.svg";
import FeatureThreeImage from "../../images/feature-three.svg";

class LandingPage extends React.PureComponent {
  redirectToFirst = () => {
    this.props.history.push("/auto-fill-component");
  };
  state = {
    browserType: ""
  };
  browserType() {
    return (navigator.sayswho = (function() {
      var ua = navigator.userAgent,
        tem,
        M =
          ua.match(
            /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
          ) || [];
      if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return "IE " + (tem[1] || "");
      }
      if (M[1] === "Chrome") {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null)
          return tem
            .slice(1)
            .join(" ")
            .replace("OPR", "Opera");
      }
      M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
      if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
      return M.join(" ");
    })());
  }

  componentDidMount() {
    this.setState({ browserType: this.browserType() });
  }
  popUpWindow = () => {
    alert("Thank you for downloading");
  };
  render() {
    const { history } = this.props;
    console.log(this.state.browserType);
    return (
      <div className=" page--wrapper">
        <div className="row section--1--wrapper">
          <div className="col">
            <div className="row mail-image--row">
              <div className="col">
                <img src={MailImage} alt="mail-image" />
                <label className="mail--text--top">
                  <div>My Email</div>
                  <div> Sign In</div>{" "}
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 page--title--left">
              <div className="page--title--text--top">
                One tab for all your inboxes!
              </div>
              <div className="text--divider" />

              <div className="page--title--text--bottom">
                Access links to your <span>Gmail™</span>, <span>AOL</span>,{" "}
                <span>Outlook™</span> email accounts from your new tab page!
              </div>

              <button
                onClick={this.popUpWindow}
                className="page--title--button"
              >
                START NOW
                <img src={ButtonArrow} alt="start-now-button" />
              </button>

              <div className="sub--text--wrapper">
                <div className="sub--text--top">
                  By clicking the button above you are agreeing to install this
                  extension and agreeing to abide by the EULA and Privacy
                  Policy, Endorsement Disclaimer and DMCA Policy
                </div>
                <div>
                  <div>
                    By clicking the button above you are agreeing to install
                    this extension and agreeing to abide by the EULA and Privacy
                    Policy, Endorsement Disclaimer and DMCA Policy
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 page--title--right">
              <img
                className="img-fluid"
                src={PageImage}
                alt="page-image-right"
              />
            </div>
          </div>
        </div>
        <div className="sequence--number--wrapper--1">
          <div className="sequence--number" />
        </div>
        <div className="row section--2--1--wrapper">
          <div className="col">
            <div className="row section--content-wrapper">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <img
                  className="feature--image--one"
                  src={FeatureOneImage}
                  alt="feature--image"
                />
                <img src={OneTabImage} alt="one-tab" />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 p-0 feature--title--wrapper--left">
                <div className="feature--title">One Tab, Multiple Inboxes</div>
                <div className="feature--content">
                  Who knew keeping all your eggs in one basket could be a good
                  thing! Be it your personal or professional or business inbox,
                  access links to multiple accounts and make your work
                  hassle-free. With the email tab, you can now access links to
                  your email accounts, all from your New Tab.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sequence--number--wrapper--2">
          <div className="sequence--number float-right" />
        </div>
        <div className="row section--2--2--wrapper">
          <div className="col">
            <div className="row section--content-wrapper">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 p-0 feature--title--wrapper--right">
                  <div className="feature--title">
                    Save Time, Increase Productivity
                  </div>
                  <div className="feature--content">
                    Who knew keeping all your eggs in one basket could be a good
                    thing! Be it your personal or professional or business
                    inbox, access links to multiple accounts and make your work
                    hassle-free. With the email tab, you can now access links to
                    your email accounts, all from your New Tab.
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 feature--title--wrapper--right--assets">
                  <img
                    className="feature--image--one"
                    src={FeatureTwoImage}
                    alt="feature--image-two"
                  />
                  <img src={OneTabImage} alt="one-tab" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sequence--number--wrapper--3--mobile ">
          <div className="sequence--number" />
        </div>
        <div className="row section--2--3--wrapper--mobile">
          <div className="col">
            <div className="row section--content-wrapper">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <img
                  className="feature--image--one"
                  src={FeatureTwoImage}
                  alt="feature--image--two"
                />
                <img src={OneTabImage} alt="one-tab" />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 p-0 feature--title--wrapper--left">
                <div className="feature--title">
                  Save Time, Increase Productivity
                </div>
                <div className="feature--content">
                  Who knew keeping all your eggs in one basket could be a good
                  thing! Be it your personal or professional or business inbox,
                  access links to multiple accounts and make your work
                  hassle-free. With the email tab, you can now access links to
                  your email accounts, all from your New Tab.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sequence--number--wrapper--3">
          <div className="sequence--number" />
        </div>
        <div className="row section--2--3--wrapper">
          <div className="col">
            <div className="row section--content-wrapper">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <img
                  className="feature--image--one"
                  src={FeatureThreeImage}
                  alt="feature--image--one"
                />
                <img src={OneTabImage} alt="one-tab" />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 p-0 feature--title--wrapper--left">
                <div className="feature--title">Popular Email Providers</div>
                <div className="feature--content">
                  Who knew keeping all your eggs in one basket could be a good
                  thing! Be it your personal or professional or business inbox,
                  access links to multiple accounts and make your work
                  hassle-free. With the email tab, you can now access links to
                  your email accounts, all from your New Tab.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row section--button--wrapper">
          <div className="col">
            <div className="row button-wrapper">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mx-auto text-center">
                <button
                  className="page--title--button"
                  onClick={this.popUpWindow}
                >
                  START NOW
                  <img src={ButtonArrow} alt="start-now-button" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row section--3--wrapper">
          <div className="col section--3--wrapper--position p-0">
            <div className="row ">
              <div className="col mx-auto easy--to--install-wrapper">
                <div className="text-center easy--to--install-text">
                  {" "}
                  Easy to Install{" "}
                </div>
                <div className="text--divider mx-auto" />
                <div className="row section-3-middle--wrapper">
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 start--now-wrapper">
                    <div className="number--wrapper--circle text-center">1</div>
                    <div className="start--now-content">
                      <div>Click</div>
                      <div>‘Start Now’</div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 add--extension-wrapper">
                    <div className="number--wrapper--circle text-center">2</div>

                    <div className="add--extension-content">
                      <div>Add</div>
                      <div>Extension</div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 new--tab-wrapper">
                    <div className="number--wrapper--circle text-center">3</div>
                    <div className="new--tab-content">
                      <div>Open a New Tab</div>
                      <div>and access links</div>
                      <div>to your inboxes</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 mx-auto text-center">
                    <button
                      onClick={this.popUpWindow}
                      className="page--title--button"
                    >
                      START NOW
                      <img src={ButtonArrowTwo} alt="start-now-button" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row page--heading">
              <div className="col page--title--left">
                <div className="page--title--text--top">Absolutely FREE!!!</div>
                <div className="text--divider" />

                <div className="page--title--text--bottom">
                  What’s even better is that your wallet will not bear any
                  damages. Nor do you have to spend any extra time to register
                  or sign up to avail the services of the Email Tab. Free of
                  hassles and free of cost!
                </div>
                <div className="page--title--text--top">Who is it for?</div>
                <div className="text--divider" />
                <ul className="questions--list">
                  <li>
                    {" "}
                    Account managers, sales professionals, executives and
                    business directors
                  </li>

                  <li>
                    Business owners working across multiple verticals or
                    businesses
                  </li>

                  <li> Professionals looking to increase their productivity</li>

                  <li>Independent professionals and freelancers</li>

                  <li>Avid email users using Gmail™, AOL, Outlook™</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row section--4--wrapper">
          <div className="col">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-0 mx-auto text--styling">
                Start Now and access links to your inboxes, all from your new
                Email Tab with My Email Sign In
              </div>
            </div>
            <div className="row button-wrapper">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mx-auto text-center">
                <button
                  onClick={this.popUpWindow}
                  className="page--title--button"
                >
                  START NOW
                  <img src={ButtonArrow} alt="start-now-button" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row section--5--wrapper">
          <div className="col">
            <div className="row footer--divider--wrapper">
              <div className="footer--divider" />
              <div className="row footer--shortcuts mx-auto">
                <div className="col-12 mx-auto">
                  <a href="#">Privacy Policy</a> <span>|</span>{" "}
                  <a href="#">EULA</a> <span>|</span>{" "}
                  <a href="#">Endorsement Disclaimer and DMCA Policy</a>
                  <span>|</span> <a href="#">Contact Us</a> <span>|</span>{" "}
                  <a href="#">Uninstall</a>
                </div>
              </div>
              <div className="footer--divider" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
