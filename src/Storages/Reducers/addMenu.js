const initialState = {
  data: null,
  isLoading: false,
};

const add_menu = (state = initialState, action) => {
  if (action.type === "ADD_MENU_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "ADD_MENU_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  } else if (action.type === "ADD_MENU_FAILED") {
    return {
      ...state,
      errorMessage: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default add_menu;
