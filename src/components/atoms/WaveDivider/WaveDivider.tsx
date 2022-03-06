import classNames from "classnames";

import "./WaveDivider.scss";

// Note for help visualizing svg paths use https://svg-path-visualizer.netlify.app/

// theme 1 is a long wave
const d1 = "M0,100 S250,-55 500, 25 S750,25 1000, 10 V0 H0 V100 Z";

// theme 2 is a zigzag
const H = 20;
const W = 30;
let d2 = `M0,0`;
let isTop = true;
for (let i = 0; i < 1200; i += W) {
  isTop = !isTop;
  d2 += ` L${i},${isTop ? 0 : H}`;
}
d2 += " Z";

const themes = {
  1: {
    d: d1,
    viewBox: "0 0 1000 100",
  },
  2: {
    d: d2,
    viewBox: "0 0 1000 20",
  },
};

const WaveDivider = ({
  className,
  theme = 1,
}: {
  className?: string;
  theme?: 1 | 2;
}) => (
  <div className="WaveDivider__wrapper">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={themes[theme].viewBox}
      className={classNames("WaveDivider", className)}
    >
      <path d={themes[theme].d} />
    </svg>
  </div>
);

export default WaveDivider;
