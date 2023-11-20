import styles from './ModalProdAddedToCart.module.scss';
import Button from "../Button/Button";

const ModalProdAddedToCart = ({ children }) => {
    return (
      <div className={styles.ProdAddedToCartOverlay}>
        <div className={styles.ModalProdAddedToCart}> 
          {children}
        </div>
      </div>
    );
  };

export default ModalProdAddedToCart;