import { BUY_CAKE } from "./cakeTypes";
// import { buyCake } from "./cakeActions";

const initialState = {
  numOfCakes: 10
};

function cakeReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      };
    default:
      return state;
  }
}

export default cakeReducer;
