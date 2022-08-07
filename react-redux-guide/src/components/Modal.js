import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as counterActions from "../store/actions/modal";

function Modal({ visible, show, hideAsync, showAsync, posts }) {
  const styles = {
    width: 400,
    height: 400,
    padding: 10,
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginTop: -200,
    marginLeft: -200,
    backgroundColor: '#f1f1f1',
    display: visible ? 'block' : 'none',
    border: '2px solid #dedede',
    overflow: 'auto',
  }
  return (
    <div>
      <div style={styles}>
        <ul>
          {posts.map(i => <li key={i.id}>{i.title}</li>)}
        </ul>
      </div>
      <button onClick={showAsync}>显示弹窗</button>
      <button onClick={hideAsync}>隐藏弹窗</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { visible: state.modal.show, posts: state.modal.posts };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(counterActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
