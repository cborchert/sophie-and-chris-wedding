import classNames from "classnames";
import type { Node } from "react";

import "./FormSpacer.scss";

const FormSpacer = ({
  children,
  className,
}: {
  children?: Node;
  className?: string;
}) => <p className={classNames("FormSpacer", className)}>{children}</p>;

export default FormSpacer;
