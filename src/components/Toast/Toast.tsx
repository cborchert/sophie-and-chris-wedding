import classNames from "classnames";
import {
  Notification,
  NotificationType,
  removeNotification,
} from "../../utils/notifications";
import CloseButton from "../CloseButton/CloseButton";

import "./Toast.scss";

const Toast = ({ id, message, options }: Notification) => {
  return (
    <div
      className={classNames("Toast", {
        "Toast--success": options?.type === NotificationType.SUCCESS,
        "Toast--error": options?.type === NotificationType.ERROR,
      })}
    >
      <p className="ToastMessage">{message}</p>
      <CloseButton onClick={() => removeNotification(id)} light />
    </div>
  );
};

export default Toast;
