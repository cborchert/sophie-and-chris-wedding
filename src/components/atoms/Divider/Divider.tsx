import classNames from "classnames";

import { ReactComponent as DividerLeft } from "../../../images/divider-left.svg";
import { ReactComponent as DividerRight } from "../../../images/divider-right.svg";
import { ReactComponent as DividerMiddle } from "../../../images/divider-middle.svg";
import "./Divider.scss";

const Divider = ({
  children,
  className,
}: {
  children?: Node;
  className?: string;
}) => {
  return (
    <div className={classNames("Divider", className)}>
      <DividerLeft />
      {children || <DividerMiddle />}
      <DividerRight />
    </div>
  );
};

export default Divider;
