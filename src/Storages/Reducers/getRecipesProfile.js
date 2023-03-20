const initialState = {
  data: null,
  errorMessage: null,
  isLoading: false,
};

const recipes_profile = (state = initialState, action) => {
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

export default recipes_profile;
