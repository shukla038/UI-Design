import { dispatch } from "rxjs/internal/observable/pairs";

import axios from "axios";
import apis from "../../config";
export const FETCH_FLIGHT = "FETCH_FLIGHT";

export const firtsaction = () => dispatch => {
  axios({
    method: "get",
    url: apis.autofill.AUTOCALL
  }).then(res => {
    dispatch({
      type: "FIRST_ACTION",
      payload: res.data.body
    });
  });
};
