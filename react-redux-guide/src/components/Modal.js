import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as counterActions from "../store/actions/modal.action";

function Modal({ visible, show, hide }) {
  const styles = {
    width: 200,
    height: 200,
    textAlign: 'center',
    lineHeight: '200px',
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginTop: -100,
    marginLeft: -100,
    backgroundColor: '#f1f1f1',
    display: visible ? 'block' : 'none'
  }
  return (
    <div>
      <div style={styles}>我是弹窗</div>
      <button onClick={show}>显示弹窗</button>
      <button onClick={hide}>隐藏弹窗</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { visible: state.modal.show };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(counterActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
