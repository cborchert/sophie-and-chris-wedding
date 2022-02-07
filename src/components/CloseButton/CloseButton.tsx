import classNames from "classnames";
import "./CloseButton.scss";

const CloseButton = ({
  className,
  ...props
}: {
  className?: string;
  [k: string]: any;
}) => (
  <button className={classNames("CloseButton", className)} {...props}></button>
);

export default CloseButton;
