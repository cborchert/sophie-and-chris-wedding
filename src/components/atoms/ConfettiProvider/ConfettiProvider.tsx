import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useListener } from "../../../utils/events";
import useMounted from "../../../utils/useMounted";

import "./ConfettiProvider.scss";

export const CONFETTI_CUSTOM_EVENT = "CONFETTI_CUSTOM_EVENT";

const ConfettiProvider = () => {
  const [triggeredTime, setTriggeredTime] = useState<number>();
  const [dimensions, setDimensions] =
    useState<{ width: number; height: number }>();

  useListener(CONFETTI_CUSTOM_EVENT, () => {
    setTriggeredTime(Date.now());
    if (typeof window !== "undefined") {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }
  });

  const clientRendered = useMounted();
  if (!clientRendered || !triggeredTime) return <></>;

  return (
    <Confetti
      className="ConfettiProvider"
      key={triggeredTime}
      recycle={false}
      numberOfPieces={800}
      confettiSource={{
        x: 0,
        y: dimensions?.height || window.innerHeight,
        w: dimensions?.width || window.innerWidth,
        h: 0,
      }}
      initialVelocityY={{ min: -10, max: -20 }}
    />
  );
};

export default ConfettiProvider;
