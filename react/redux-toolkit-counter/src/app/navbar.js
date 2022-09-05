import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNotifications,
  selectAllNotifications,
} from "../features/notifications/notificationsSlice";

export const Navbar = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(selectAllNotifications);
  const numUnreadNotifications = notifications.filter((n) => !n.read).length;
  return (
    <nav>
      <section>
        <Link to="/">Counter</Link>
        &nbsp;&nbsp;
        <Link to="/posts">Posts</Link>
        &nbsp;&nbsp;
        <Link to="/users">Users</Link>
        &nbsp;&nbsp;
        <Link to="/notifications">
          Notifications ({numUnreadNotifications})
        </Link>
        &nbsp;&nbsp;
        <button onClick={() => dispatch(fetchNotifications())}>
          Refresh Notifications
        </button>
      </section>
    </nav>
  );
};
