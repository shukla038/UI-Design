import React from "react";
import PropTypes from "prop-types";
import uuidV1 from "uuid/v1";

const getformClass = props => {
  const { meta } = props;
  let formClass =
    props.hasPrependedIcon || props.hasappendedIcon
      ? "input-group"
      : "form-group";

  if (props.disabled) {
    formClass += " disabled";
  } else if (meta.active) {
    formClass += " active";
  }
  return formClass;
};
export const renderInput = props => {
  const formClass = getformClass(props);
  return (
    <div className={`${formClass}`} disabled>
      <label for={props.id}>{props.label}</label>
      <input
        class="form-control"
        name={props.name}
        id={props.id}
        type={props.type}
        {...props.input}
        placeholder={props.label}
        disabled={props.disabled}
      />
      {props.meta.touched && props.meta.error && (
        <span className="">{props.meta.error}</span>
      )}
    </div>
  );
};
renderInput.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string
};
renderInput.defaultProps = {
  name: uuidV1(),
  id: uuidV1()
};

export const customRadio = props => {
  const formClass = getformClass(props);
  return (
    <div>
      <input
        name={props.name}
        id={props.id}
        type={props.type}
        {...props.input}
        placeholder={props.label}
        onBlur={() => props.input.onBlur(props.input.value)}
      />
      <label style={{ paddingLeft: "0.8rem" }} htmlFor={props.id}>
        {props.label}
      </label>
      {props.meta.touched && props.meta.error && (
        <span className="">{props.meta.error}</span>
      )}
    </div>
  );
};
customRadio.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string
};
customRadio.defaultProps = {
  name: uuidV1(),
  id: uuidV1()
};
// export const renderSelect = () => {
//   return (
//     <div className={`${formClass}`} disabled>
//       <label for={props.id}>{props.label}</label>
//       <select name="" id="" />
//       {props.meta.touched && props.meta.error && (
//         <span className="">{props.meta.error}</span>
//       )}
//     </div>
//   );
// };
