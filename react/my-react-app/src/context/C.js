import { UserConsumer } from "./userContext";

const C = (props) => {
  return (
    <UserConsumer>
      {(val) => {
        return (
          <div>
            <div>C组件：{val}</div>
            C组件：{props.children}
          </div>
        );
      }}
    </UserConsumer>
  );
};

export default C;
