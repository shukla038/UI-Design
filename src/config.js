export let NODE_URL;
switch (window.location.hostname.toLocaleLowerCase()) {
  case "127.0.0.1":
  case "localhost":
    NODE_URL = "https://api.rubique.com/v3";
}
//apis here
export const apis = {
  autofill: {
    AUTOCALL: `${NODE_URL}//uber-list?params={%22list_id%22:10080}`
  }
};
export default apis;
