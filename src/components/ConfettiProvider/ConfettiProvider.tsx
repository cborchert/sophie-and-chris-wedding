import Confetti from "react-confetti";
import useMounted from "../../utils/useMounted";

const ConfettiBlast = ({ triggeredTime }: { triggeredTime?: number }) => {
  const clientRendered = useMounted();

  if (!clientRendered || !triggeredTime) return <></>;

  return <Confetti key={triggeredTime} recycle={false} numberOfPieces={800} />;
};

export default ConfettiBlast;
