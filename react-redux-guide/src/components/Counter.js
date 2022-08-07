import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as counterActions from "../store/actions/counter.action";

function Counter({ count, increment, decrement }) {
  return (
    <div>
      <button onClick={() => increment(5)}>+</button>
      <span>{count}</span>
      <button onClick={() => decrement(3)}>-</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { count: state.counter.count };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(counterActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
