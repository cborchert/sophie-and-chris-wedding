import classNames from "classnames";
import {
  Notification,
  NotificationType,
  removeNotification,
} from "../../utils/notifications";
import CloseButton from "../CloseButton/CloseButton";

import "./Toast.scss";

const Toast = ({ id, message, options }: Notification) => {
  console.log(options);
  return (
    <div
      className={classNames("Toast", {
        "Toast--success": options?.type === NotificationType.SUCCESS,
        "Toast--error": options?.type === NotificationType.ERROR,
        "Toast--permanent": !options?.permanent,
      })}
      style={{ animationDuration: `${options?.duration || 8000}ms` }}
    >
      <p className="ToastMessage">{message}</p>
      <CloseButton onClick={() => removeNotification(id)} light />
    </div>
  );
};

export default Toast;
