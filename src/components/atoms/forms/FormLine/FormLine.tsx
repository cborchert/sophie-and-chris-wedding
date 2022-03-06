import classNames from "classnames";
import "./FormLine.scss";

const FormLine = ({
  id,
  children,
  hidden,
  className,
}: {
  id?: string;
  children?: Node;
  hidden?: boolean;
  className?: string;
}) => (
  <div
    id={id}
    className={classNames("FormLine", className, { "is-hidden": hidden })}
  >
    {children}
  </div>
);

export default FormLine;
