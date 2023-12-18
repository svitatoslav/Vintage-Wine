import cn from "classnames";
import PropTypes from "prop-types";
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
  inCart: styles.InCartBtn,
  product: styles.ProductBtn,
};

const buttonColor = {
  primary: styles.Primary,
  secondary: styles.Secondary,
  transparent: styles.Transparent,
  gray: styles.GrayBtn,
  success: styles.Success,
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

Button.propTypes = {
  text: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  text: "",
  onClick: () => {},
  type: "button",
  variant: "default",
  color: "primary",
  isDisabled: false,
};

export default Button;
