import React from "react";
const validate = values => {
  // IMPORTANT: values is an Immutable.Map here!
  const errors = {};
  if (!values.get("firstName")) {
    errors.firstName = "Required";
  } else if (values.get("firstName").length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  return errors;
};

export default validate;
