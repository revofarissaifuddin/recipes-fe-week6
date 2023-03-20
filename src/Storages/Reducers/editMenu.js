const initialState = {
  data: null,
  errorMessage: null,
  isLoading: false,
};

const edit_menu = (state = initialState, action) => {
  if (action.type === "GET_EDIT_MENU_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "GET_EDIT_MENU_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  } else if (action.type === "GET_EDIT_MENU_FAILED") {
    return {
      ...state,
      errorMessage: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default edit_menu;
