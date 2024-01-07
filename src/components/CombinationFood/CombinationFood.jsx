import styles from './CombinationFood.module.scss';

const CombinationFood = () => (
    <div className={styles.CombinationFood} data-testid="CombinationFood">
        <div className={styles.deliveryPaymentWrapper}>
            <div className={styles.deliveryPayment}>
                <div className={styles.title}>Delivery</div>
                <div className={styles.text}>
                    <p>To the warehouse or by courier UPS delivery.</p>
                    <p>We will ship on the next working day</p>
                </div>
            </div>
            <div className={styles.deliveryPayment}>
                <div className={styles.title}>Payment</div>
                <p className={styles.text}>By card online</p>
            </div>
        </div>
        <div className={styles.perfectCombination}>
            <div className={styles.title}>Perfect combination</div>
            <div className={styles.dishes}>
                <div className={styles.dish}>
                    <img src="https://res.cloudinary.com/dhpukux5x/image/upload/v1698006757/znbbo2hdyxkn4mmpijng.png" alt="" />
                    {/* <img src="../../../public/imageProject/product/meat.png" alt="" /> */}
                    <p className={styles.dishName}>Red meat</p>
                </div>
                <div className={styles.dish}>
                    <img src="https://res.cloudinary.com/dhpukux5x/image/upload/v1698006757/gqt3emdpr1vvqqgnai8i.png" alt="" />
                    {/* <img src="../../../public/imageProject/product/tuna.png" alt="" /> */}
                    <p className={styles.dishName}>Tuna</p>
                </div>
                <div className={styles.dish}>
                    <img src="https://res.cloudinary.com/dhpukux5x/image/upload/v1698006756/tvuzr58caqcatunrj8xx.png" alt="" />
                    {/* <img src="../../../public/imageProject/product/cheeses.png" alt="" /> */}
                    <p className={styles.dishName}>Hard cheeses</p>
                </div>
                <div className={styles.dish}>
                    <img src="https://res.cloudinary.com/dhpukux5x/image/upload/v1698006756/yaybudmk1gecc9fz71bk.png" alt="" />
                    {/* <img src="../../../public/imageProject/product/duck.png" alt="" /> */}
                    <p className={styles.dishName}>Duck</p>
                </div>
            </div>
        </div>
    </div>
);

export default CombinationFood;
