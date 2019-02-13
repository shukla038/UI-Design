import React from "react";
import Lottie from "react-lottie";
import propTypes from "prop-types";
import data from "../finger_print.json";

class Loader extends React.Component {
  state = { isStopped: false, isPaused: false };

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: data,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    );
  }
}
Loader.defaultProps = {
  type: 1,
  height: 200,
  width: 200
};

Loader.propTypes = {
  /**
   * 1 or 2 or 3 and likewise
   */
  type: propTypes.number,
  /**
   * height of the element
   */
  height: propTypes.number,
  /**
   * width of the element
   */
  width: propTypes.number
};
export default Loader;
