/* eslint-disable react/button-has-type */
import cn from "classnames";
import styles from "./Button.module.scss";

const buttonVariant = {
  small: styles.Small,
  smallAdaptive: styles.SmallAdaptive,
  medium: styles.Medium,
  wide: styles.WideButton,
  xSmall: styles.xSmall,
  default: styles.Button,
  big: styles.BigButton,
  smallBasket: styles.SmallBasket,
};

const buttonColor = {
  primary: styles.Primary,
  secondary: styles.Secondary,
  transparent: styles.Transparent,
  gray: styles.GrayBtn,
};
const Button = ({
  text,
  onClick,
  type = "button",
  variant = "default",
  color = "primary",
  isDisabled = false,
}) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      data-testid="Button"
      className={cn(buttonVariant[variant], buttonColor[color])}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
