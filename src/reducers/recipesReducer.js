const initialState = {
  loading: false,
  recipes: [],
};

const recipesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "AWAITING_RECIPES":
      return {
        ...state,
        loading: true,
      };
    case "REJECTED_RECIPSE":
      return {
        ...state,
        loading: false,
      };
    case "SUCCESS_RECIPES":
      return {
        ...state,
        loading: false,
        recipes: payload,
      };
    default:
      return state;
  }
};

export default recipesReducer;
