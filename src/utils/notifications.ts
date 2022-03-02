import { useEffect, useState } from "react";
import { trigger } from "./events";

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
  trigger(notificationType, {
    message,
    id,
    created: Date.now(),
    options: {
      permanent,
      duration,
      type,
    },
  });
};

export const removeNotification = (id: string, notificationType?: string) => {
  if (typeof window === "undefined") {
    return;
  }
  trigger(getRemovedNotificationType(notificationType), {
    id,
  });
};

const noOp = () => {};

export const useNotifications = (config?: {
  onAddNotification?: (Notification) => void;
  onRemoveNotification?: (string) => void;
  notificationType?: string;
}): { notifications: Notification[]; resetNotifications: () => void } => {
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
