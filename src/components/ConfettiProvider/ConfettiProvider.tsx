import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import useMounted from "../../utils/useMounted";

export const CONFETTI_CUSTOM_EVENT = "CONFETTI_CUSTOM_EVENT";

const ConfettiBlast = () => {
  const [triggeredTime, setTriggeredTime] = useState<number>();

  useEffect(() => {
    const updateTriggeredTime = () => {
      setTriggeredTime(Date.now());
    };

    if (typeof window !== "undefined") {
      window.addEventListener(CONFETTI_CUSTOM_EVENT, updateTriggeredTime);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener(CONFETTI_CUSTOM_EVENT, updateTriggeredTime);
      }
    };
  }, []);
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
