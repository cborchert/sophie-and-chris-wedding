import { useEffect, useCallback } from "react";

export const trigger = (
  notificationType: string,
  detail: { id?: string | number; [k: string]: any } = {}
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

export const on = (
  notificationType: string,
  listener: (CustomEvent) => void
) => {
  if (typeof window === "undefined") {
    return;
  }
  window.addEventListener(notificationType, listener);
};

export const off = (
  notificationType: string,
  listener: (CustomEvent) => void
) => {
  if (typeof window === "undefined") {
    return;
  }
  window.removeEventListener(notificationType, listener);
};

export const useListener = (
  notificationType: string,
  listener: (CustomEvent) => void
) => {
  useEffect(() => {
    on(notificationType, listener);
    return () => off(notificationType, listener);
  }, []);
};
