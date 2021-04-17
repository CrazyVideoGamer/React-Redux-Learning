import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer({ numOfCakes, buyCake }) {
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={buyCake}>Buy Cake</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    numOfCakes: state.numOfCakes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    buyCake: () => dispatch(buyCake())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
