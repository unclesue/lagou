import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as counterActions from "../store/actions/counter";

function Counter({ count, incrementAsync, decrement }) {
  return (
    <div>
      <button onClick={() => incrementAsync(51)}>+</button>
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
