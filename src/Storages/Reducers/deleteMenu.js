const initialState = {
  data: null,
  errorMessage: null,
  isLoading: false,
};

const delete_menu = (state = initialState, action) => {
  if (action.type === "DELETE_MENU_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "DELETE_MENU_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  } else if (action.type === "DELETE_MENU_FAILED") {
    return {
      ...state,
      errorMessage: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default delete_menu;
