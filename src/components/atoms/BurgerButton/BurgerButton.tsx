import classNames from "classnames";
import "./BurgerButton.scss";

const BurgerButton = ({
  className,
  theme,
  ...props
}: {
  className?: string;
  theme?: "lignt" | "dark" | "intermediate";
  [key: string]: any;
}) => (
  <div className="BurgerButton__container">
    <button
      className={classNames("BurgerButton", className, { [theme]: theme })}
      {...props}
    ></button>
  </div>
);

export default BurgerButton;
