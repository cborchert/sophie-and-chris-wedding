import classNames from "classnames";
import "./FormLine.scss";

const FormLine = ({
  id,
  children,
  hidden,
}: {
  id?: string;
  children?: Node;
  hidden?: boolean;
}) => (
  <div id={id} className={classNames("FormLine", { "is-hidden": hidden })}>
    {children}
  </div>
);

export default FormLine;
