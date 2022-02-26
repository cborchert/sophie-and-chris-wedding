import classNames from "classnames";

import "./Icon.scss";

const Icon = ({
  src,
  Img,
  className,
  contained,
  containerClassName,
  size = "medium",
  light,
  outlined,
}: {
  src?: string;
  Img?: () => Node;
  className?: string;
  contained?: boolean;
  containerClassName?: string;
  size?: "small" | "medium" | "large";
  light?: boolean;
  outlined?: boolean;
}) => {
  const El = Img || "img";
  return (
    <span
      className={classNames({
        Icon__container: contained,
        [containerClassName]: containerClassName && contained,
        "Icon__container--outline": contained && outlined,
        [size]: contained && size,
      })}
    >
      <El
        src={src}
        className={classNames("Icon", className, {
          isContained: contained,
          [size]: size,
          light,
        })}
      />
    </span>
  );
};

export default Icon;
