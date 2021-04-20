import { BUY_ICECREAM } from "./icecreamTypes";

const initialState = {
  numOfIcecream: 20
};

function icecreamRedcuer(state = initialState, action) {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        numOfIcecream: state.numOfIcecream - 1
      };
    default:
      return state;
  }
}

export default icecreamRedcuer;
