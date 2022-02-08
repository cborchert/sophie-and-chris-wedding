import { useNotifications } from "../../utils/notifications";
import Toast from "./Toast";

import "./ToastDispatcher.scss";

const ToastDispatcher = () => {
  const { notifications: toasts } = useNotifications();

  return (
    <div className="ToastDispatcher">
      {toasts
        .sort((a, b) => b.created - a.created)
        .map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
    </div>
  );
};

export default ToastDispatcher;
