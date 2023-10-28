import  styles from './Button.module.scss'
import cn from "classnames";

const buttonVariant = {
    small: styles.Small,
    smallAdaptive: styles.SmallAdaptive,
    medium: styles.Medium,
    wide: styles.WideButton,
    xSmall: styles.xSmall,
    default: styles.Button,
    big: styles.BigButton
}

const buttonColor = {
    primary: styles.Primary,
    secondary: styles.Secondary


}
 const Button = ({text, onClick, type = "default", color = "primary", isDisabled = false}) => {

    return (
        <button disabled={isDisabled} data-testid="Button" className={cn(buttonVariant[type], buttonColor[color] )} onClick={onClick}>{text}</button>
    )
}

export default Button