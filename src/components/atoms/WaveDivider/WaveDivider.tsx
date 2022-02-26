import classNames from "classnames";

import "./WaveDivider.scss";

// Note for help visualizing svg paths use https://svg-path-visualizer.netlify.app/
const d = "M0,100 S250,-55 500, 25 S750,25 1000, 10 V0 H0 V100 Z";

const WaveDivider = ({ className }: { className?: string }) => (
  <div className="WaveDivider__wrapper">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 100"
      className={classNames("WaveDivider", className)}
    >
      <path d={d} />
    </svg>
  </div>
);

export default WaveDivider;
