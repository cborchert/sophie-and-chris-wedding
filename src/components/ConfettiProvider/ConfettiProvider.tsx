import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useListener } from "../../utils/events";
import useMounted from "../../utils/useMounted";

export const CONFETTI_CUSTOM_EVENT = "CONFETTI_CUSTOM_EVENT";

const ConfettiBlast = () => {
  const [triggeredTime, setTriggeredTime] = useState<number>();

  useListener(CONFETTI_CUSTOM_EVENT, () => {
    setTriggeredTime(Date.now());
  });

  const clientRendered = useMounted();
  if (!clientRendered || !triggeredTime) return <></>;

  return (
    <Confetti
      key={triggeredTime}
      recycle={false}
      numberOfPieces={800}
      confettiSource={{
        x: 0,
        y: window.innerHeight,
        w: window.innerWidth,
        h: 0,
      }}
      initialVelocityY={{ min: -10, max: -20 }}
    />
  );
};

export default ConfettiBlast;
