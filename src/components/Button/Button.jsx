import  styles from './Button.module.scss'
 const Button = ({text, onClick, type}) => {
    let ButtonClass = styles.Button

     if (type === 'readAll') {
         ButtonClass = styles.ReadAllBtn;
     } else if (type === 'readMore') {
         ButtonClass = styles.ReadMoreBtn;
     } else if (type === 'addToCart') {
         ButtonClass = styles.AddToCartBtn;
     } else if (type === 'WideButton') {
         ButtonClass = styles.WideButton;
     }


    return (
        <button data-testid="Button" className={ButtonClass} onClick={onClick}>{text}</button>
    )
}

export default Button