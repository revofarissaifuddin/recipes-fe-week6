import axios from "axios";

export const getMenu = (navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) navigate("/auth/login");
    let headers = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: "GET_MENU_PENDING" });
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/recipes/my-recipe`,
      headers
    );
    const menu = result.data.data;
    dispatch({ type: "GET_MENU_SUCCESS", payload: menu });
  } catch (err) {
    dispatch({ type: "GET_MENU_FAILED", payload: err.response.data.message });
    console.log("getMenu error");
    console.log(err);
  }
};

export const addMenu = (data, navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) navigate("/auth/login");
    let headers = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: "ADD_MENU_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/recipes`,
      data,
      headers
    );
    const payload = result.data;
    dispatch({ type: "ADD_MENU_SUCCESS", payload });
    navigate("/profile/recipesProfile");
  } catch (error) {
    dispatch({ type: `ADD_MENU_ERROR`, payload: error.respons.data.message });
    console.log("Add Menu Error");
    console.log(error);
  }
};

export const getEditMenu = (navigate, id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) navigate("/auth/login");
    let headers = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: "GET_EDIT_MENU_PENDING" });
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/recipes/my-recipe/${id}`,
      headers
    );
    const editmenu = result.data.data;
    console.log(editmenu)
    dispatch({ type: "GET_EDIT_MENU_SUCCESS", payload: editmenu });
  } catch (error) {
    dispatch({
      type: "GET_EDIT_MENU_FAILED",
      payload: error.respons.data.message,
    });
    console.log("GetEdit Error");
    console.log(error);
  }
};

export const updateEditMenu = (data,navigate,id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) navigate("/auth/login");
    let headers = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: "UPDATE_EDIT_MENU_PENDING" });
    console.log(id)
    const result = axios.put(
      `${process.env.REACT_APP_BASE_URL}/recipes/my-recipe/${id}`,data,
      headers
    );
    const updateMenu = result.data;
    navigate("/profile/recipesProfile");
    console.log(updateMenu)
    dispatch({ type: "UPDATE_EDIT_MENU_SUCCESS", payload: updateMenu });
  } catch (error) {
    dispatch({
      type: "UPDATE_EDIT_MENU_FAILED",
      payload: error.respons.data.message,
    });
    console.log("Update Menu Error");
    console.log(error);
  }
};

export const detailMenu = (navigate, id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_DETAIL_MENU_PENDING" });
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/recipes/my-recipe/${id}`
    );
    const detail = result.data.data;
    dispatch({ type: "GET_DETAIL_MENU_SUCCESS", payload: detail });
    // navigate("/menu/detailMenu/:id");
  } catch (error) {
    dispatch({
      type: "GET_DETAIL_MENU_FAILED",
      payload: error.response.data.message,
    });
    console.log("getMenu error");
    console.log(error);
  }
};

export const deleteMenu = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    let headers = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: "DELETE_MENU_PENDING" });
    const result = axios.delete(
      `${process.env.REACT_APP_BASE_URL}/recipes/my-recipe/${id}`,
      headers
    );
    const delete_menu = result.data;
    dispatch({ type: "DELETE_MENU_SUCCESS", payload: delete_menu });
  } catch (error) {
    dispatch({
      type: "DELETE_MENU_FAILED",
      payload: error.response.data.message,
    });
    console.log("DELETEMenu error");
    console.log(error);
  }
};

export const getSearchMenu = (searchMenu) => async (dispatch) => {
  try {
    dispatch({ type: "GET_SEARCH_MENU_PENDING" });
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/recipes/all-recipe?search=${searchMenu}`
    );
    const search = result.data.data;
    dispatch({ type: "GET_SEARCH_MENU_SUCCESS", payload: search });
  } catch (err) {
    dispatch({
      type: "GET_SEARCH_MENU_FAILED",
      payload: err.response.data.message,
    });
    console.log("getMenu error");
    console.log(err);
  }
};
