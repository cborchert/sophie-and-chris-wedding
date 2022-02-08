import { Transition, animated } from "react-spring";
import { useNotifications } from "../../utils/notifications";
import Toast from "./Toast";

import "./ToastDispatcher.scss";

const ToastDispatcher = () => {
  const { notifications: toasts } = useNotifications();

  console.log({ Transition, animated });
  return (
    <div className="ToastDispatcher">
      <Transition
        items={toasts.sort((a, b) => b.created - a.created)}
        from={{ opacity: 0, transform: "translateX(200%)" }}
        enter={{ opacity: 1, transform: "translateX(0%)" }}
        leave={{ opacity: 0 }}
        children={(style, toast) => {
          return (
            <animated.div style={style}>
              <Toast key={toast.id} {...toast} />
            </animated.div>
          );
        }}
      />
    </div>
  );
};

export default ToastDispatcher;
