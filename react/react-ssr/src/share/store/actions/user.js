import axios from "axios";

export const SAVE_USER = "save_user";

export const fetchUser = () => async (dispatch) => {
  // const { data } = await axios.get(
  //   "https://jsonplaceholder.typicode.com/users"
  // );
  const data = [{
    id: 1,
    name: "</script><script>alert(1)</script>"
  }]
  dispatch({ type: SAVE_USER, payload: data });
};
