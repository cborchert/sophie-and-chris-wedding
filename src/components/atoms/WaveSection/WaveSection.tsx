import { useRef } from "react";

const WaveSection = ({
  children,
  className,
}: {
  children?: Node;
  className?: string;
}) => {
  const { current: waveId } = useRef(`wave-${Math.random()}`);
  return (
    <div className={className} style={{ clipPath: `url("#${waveId}")` }}>
      <svg style={{ height: 0 }}>
        <clipPath id={waveId} clipPathUnits="objectBoundingBox">
          <path class="st0" d="M1,0c0,0-0.3,0.1-0.5,0.1S0.3,0,0,0.1V1h1L1,0z" />
        </clipPath>
      </svg>
      {children}
    </div>
  );
};

export default WaveSection;
