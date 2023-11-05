import ListIcon from './icons/ListIcon';

import styles from './AboutProduct.module.scss';

const AboutProduct = () => (
    <section className={styles.AboutProduct} data-testid="AboutProduct">
        <img src="../../../public/imageProject/product/barrels.png" alt="barrels" />
        <div className={styles.content}>
            <p>Can be recommended for collecting. They have a great potential for bottle aging: white wines - at least 5 years, red wines - at least 7 years. Each denomination from 2000 to 5000 bottles per season</p>
            <p>A limited collection of aged still wines. Aging: in oak barrels - 9-12 months and additional aging in bottles.</p>
            <ul>
                <h6>The wines are created according to the principles of premium winemaking:</h6>
                <li>
                    <span>
                        <ListIcon />
                    </span>
                    Using own grapes of the Chabot terroir from the respective plots. The vines were purchased in Europe, taking into account the characteristics of Chabot soils and planted on the mini-plots of the terroir that are best for them.
                </li>
                <li>
                    <span>
                        <ListIcon />
                    </span>
                    In order to create a product of exceptional quality, the number of grapes on each vine is reduced according to the grape variety: up to 2 - 2.5 kg for red varieties and up to 1.5 - 1.7 kg for white varieties.
                </li>
                <li>
                    <span>
                        <ListIcon />
                    </span>
                    Grapes are collected manually in boxes. After only 15 minutes, they are delivered by refrigerators to the SHABO Wine House, whose equipment is one of the best in Europe. Here, the grapes undergo delicate manual sorting in several stages and processing. Next comes the fermentation process with automated temperature control: white wines in oak barrels, red wines in Taransaud oak vats.
                </li>
                <li>
                    <span>
                        <ListIcon />
                    </span>
                    Wines are aged in oak barrels for 9-12 months Quality control is carried out by SARL Derenoncourt (France) experts.
                </li>
            </ul>
            <img src="../../../public/imageProject/product/four-glasses.png" alt="wine image" />
        </div>
    </section>
);

export default AboutProduct;
