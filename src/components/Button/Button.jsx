import cn from 'classnames';
import styles from './Button.module.scss';

const buttonVariant = {
  small: styles.Small,
  smallAdaptive: styles.SmallAdaptive,
  medium: styles.Medium,
  wide: styles.WideButton,
  xSmall: styles.xSmall,
  default: styles.Button,
  big: styles.BigButton,
};

const buttonColor = {
  primary: styles.Primary,
  secondary: styles.Secondary,

};

function Button({
  text, onClick, type, typeBtn = 'default', color = 'primary', disabled = false,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      data-testid="Button"
      className={cn(buttonVariant[typeBtn], buttonColor[color])}
      onClick={onClick}
    >
      {text}

    </button>
  );
}

export default Button;
