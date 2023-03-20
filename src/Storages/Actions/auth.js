import axios from "axios";

export const loginUser = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/login`,
      data
    );
    const user = result.data.data;
    localStorage.setItem("token", user.token);
    localStorage.setItem("email", user.email);
    localStorage.setItem("name", user.fullname);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });
    navigate("/profile/recipesProfile");
  } catch (err) {
    dispatch({ type: `USER_LOGIN_ERROR`, payload: err.respons.data.message });
    console.log("loginUser error");
    console.log(err);
  }
};

export const regUser = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/register`,
      data
    );
    const user = result.data.data;
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: user });
    navigate("/auth/login");
  } catch (err) {
    dispatch({
      type: `USER_REGISTER_FAILED`,
      payload: err.respons.data.message,
    });
    console.log("loginUser error");
    console.log(err);
  }
};
