import { useEffect, useState } from "react";

export const ADD_NOTIFICATION = "ADD_NOTIFICATION";
export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION";

export enum NotificationType {
  SUCCESS,
  ERROR,
  INFO,
}

export type NotificationOptions = {
  permanent?: boolean;
  duration?: number;
  type?: NotificationType;
};

export type Notification = {
  message: string;
  id: string;
  options?: NotificationOptions;
  created: number;
};

export const sendNotification = (
  message: string,
  options?: NotificationOptions & { id?: string }
) => {
  if (typeof window === "undefined") {
    return;
  }
  const {
    permanent = false,
    duration = 5000,
    type = NotificationType.INFO,
    id: assignedId,
  } = options || {};
  const id = assignedId ? assignedId : `${Date.now()}`;
  const notification = new CustomEvent(ADD_NOTIFICATION, {
    detail: {
      message,
      id,
      created: Date.now(),
      options: {
        permanent,
        duration,
        type,
      },
    },
  });
  window.dispatchEvent(notification);
};

export const removeNotification = (id: string) => {
  if (typeof window === "undefined") {
    return;
  }
  const notification = new CustomEvent(REMOVE_NOTIFICATION, {
    detail: {
      id,
    },
  });
  window.dispatchEvent(notification);
};

const noOp = () => {};

export const useNotifications = (config?: {
  onAddNotification?: (Notification) => void;
  onRemoveNotification?: (string) => void;
}) => {
  const { onAddNotification = noOp, onRemoveNotification = noOp } =
    config || {};
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const timeouts = [];

    const removeNotificationHandler = (removeNotificationEvent) => {
      const { detail: { id = "" } = {} } = removeNotificationEvent;
      if (id) {
        setNotifications((prevNotifications) =>
          prevNotifications.filter((notification) => notification.id !== id)
        );
        onRemoveNotification(id);
      }
    };

    const addNotificationHandler = (addNotificationEvent) => {
      const { detail: notification } = addNotificationEvent;
      if (notification.id) {
        setNotifications((prevNotifications) => [
          ...prevNotifications,
          notification,
        ]);
        onAddNotification(notification);
        if (!notification?.options?.permanent) {
          const timeout = setTimeout(() => {
            removeNotification(notification.id);
          }, notification?.options?.duration || 0);
          timeouts.push(timeout);
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener(ADD_NOTIFICATION, addNotificationHandler);
      window.addEventListener(REMOVE_NOTIFICATION, removeNotificationHandler);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener(ADD_NOTIFICATION, addNotificationHandler);
        window.removeEventListener(
          REMOVE_NOTIFICATION,
          removeNotificationHandler
        );
      }
      timeouts.forEach((timeout) => clearTimeout(timeout));
      setNotifications([]);
    };
  }, [onAddNotification, onRemoveNotification]);

  const resetNotifications = () => {
    setNotifications([]);
  };

  return { notifications, resetNotifications };
};
