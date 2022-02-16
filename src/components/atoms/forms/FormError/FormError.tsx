import classNames from "classnames";
import FormSpacer from "../FormSpacer/FormSpacer";
import "./FormError.scss";

const FormError = ({
  formik,
  name,
  className,
}: {
  formik: { errors: any; touched: any };
  name: string;
  className?: string;
}) => (
  <FormSpacer className={classNames("FormError", className)}>
    {(formik.touched[name] && formik.errors[name]) || " "}
  </FormSpacer>
);

export default FormError;
