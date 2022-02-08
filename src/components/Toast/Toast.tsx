import { useEffect } from "react";
import { Notification, removeNotification } from "../../utils/notifications";
import CloseButton from "../CloseButton/CloseButton";

import "./Toast.scss";

const Toast = ({ id, message, options }: Notification) => {
  return (
    <div className="Toast">
      <p className="ToastMessage">{message}</p>
      <CloseButton onClick={() => removeNotification(id)} />
    </div>
  );
};

export default Toast;
