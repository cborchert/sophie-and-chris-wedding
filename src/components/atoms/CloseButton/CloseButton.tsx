import classNames from "classnames";
import "./CloseButton.scss";

const CloseButton = ({
  className,
  light,
  ...props
}: {
  className?: string;
  light?: boolean;
  [key: string]: any;
}) => (
  <button
    className={classNames("CloseButton", className, { "is-alt": light })}
    {...props}
  ></button>
);

export default CloseButton;
