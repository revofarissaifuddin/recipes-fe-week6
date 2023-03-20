const initialState = {
  data: null,
  errorMessage: null,
  isLoading: false,
};

const search_menu = (state = initialState, action) => {
  if (action.type === "GET_RECIPES_MENU_PROFILE_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "GET_RECIPES_MENU_PROFILE_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  } else if (action.type === "GET_RECIPES_MENU_PROFILE_FAILED") {
    return {
      ...state,
      errorMessage: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default search_menu;
