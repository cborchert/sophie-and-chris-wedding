import { useEffect, useState } from "react";

export const NOTIFICATION = "NOTIFICATION";

export const getRemovedNotificationType = (notificationType = NOTIFICATION) =>
  `${notificationType}__removed`;

export enum NotificationType {
  SUCCESS,
  ERROR,
  INFO,
}

export type NotificationOptions = {
  permanent?: boolean;
  duration?: number;
  type?: NotificationType;
  notificationType?: string;
};

export type Notification = {
  message: string;
  id: string;
  options?: NotificationOptions;
  created: number;
};

const DEFAULT_DURATION = 8000;

export const sendSimpleNotification = (
  detail: { id?: string | number },
  notificationType: string = NOTIFICATION
) => {
  if (typeof window === "undefined") {
    return;
  }

  const id = detail?.id || `${Date.now()}`;
  const notification = new CustomEvent(notificationType, {
    detail: {
      id,
      created: Date.now(),
      ...detail,
    },
  });
  window.dispatchEvent(notification);
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
    duration = DEFAULT_DURATION,
    type = NotificationType.INFO,
    id: assignedId,
    notificationType = NOTIFICATION,
  } = options || {};
  const id = assignedId ? assignedId : `${Date.now()}`;
  const notification = new CustomEvent(notificationType, {
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

export const removeNotification = (id: string, notificationType?: string) => {
  if (typeof window === "undefined") {
    return;
  }
  const notification = new CustomEvent(
    getRemovedNotificationType(notificationType),
    {
      detail: {
        id,
      },
    }
  );
  window.dispatchEvent(notification);
};

const noOp = () => {};

export const useNotifications = (config?: {
  onAddNotification?: (Notification) => void;
  onRemoveNotification?: (string) => void;
  notificationType?: string;
}) => {
  const {
    onAddNotification = noOp,
    onRemoveNotification = noOp,
    notificationType = NOTIFICATION,
  } = config || {};
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
      window.addEventListener(notificationType, addNotificationHandler);
      window.addEventListener(
        getRemovedNotificationType(notificationType),
        removeNotificationHandler
      );
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener(notificationType, addNotificationHandler);
        window.removeEventListener(
          getRemovedNotificationType(notificationType),
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
