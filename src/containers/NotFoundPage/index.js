import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotPage = styled.div`
  padding-top: 50px;
  text-align: center;
`;

class NotFoundPage extends React.PureComponent {
  render() {
    const { history } = this.props;
    return (
      <NotPage>
        <br />
        <br />
        <h4>Oops! You should not be here.</h4>
        <p>Please go to a different page.</p>
        <div className="padding-y-10">
          <Link className="btn btn-primary" href="/" to="/">
            Take me to homepage
          </Link>
          <div className="gap-10" />
        </div>
      </NotPage>
    );
  }
}

export default NotFoundPage;
