import styles from "./CheckoutItem.module.scss";

const CheckoutItem = ({ count, product }) => {
  const { name, productImg, currentPrice, characteristics } = product;
  const { grape, color } = characteristics;

  return (
    <div className={styles.CheckoutItem}>
      <div className={styles.CheckoutImg}>
        <img src={productImg} alt="image" className={styles.Img} />
      </div>

      <div className={styles.CheckoutInfo}>
        <div className={styles.CheckoutItemDescr}>
          <h3 className={styles.TitleName}>{name}</h3>
          {grape.grape && (
            <p className={styles.Text}>
              {grape.grape}, {color.color}
            </p>
          )}
        </div>
        <div className={styles.Bottom}>
          <span className={styles.CheckoutItemQuantity}>{count} pcs</span>
          <p className={styles.Price}>
            {(currentPrice * count).toFixed(2)} <span>UAH</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
