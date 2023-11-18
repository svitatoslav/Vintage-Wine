import { useState } from "react";
import UniProduct from "../components/ProductCard/UniProduct";
import useResize from "../hooks/useResize";

const MIN_VALUE = 768;
const MAX_VALUE = 1160;

export default function CreateCards({array}) {
    const [shopElements, setShopElements] = useState([])
    const viewportWidth = useResize();

    const chunkSize = (viewportWidth > MIN_VALUE && viewportWidth < MAX_VALUE) ? 3 : 5;

    for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize);
        const [firstImage, ...restImages] = chunk;

        const bigImageDiv = (
            <div key={`bigImage_${i}`}>
                <UniProduct key={firstImage._id} price={firstImage.currentPrice} id={firstImage._id} name={firstImage.name} img={firstImage.productImg} />
            </div>
        );

        const smallImagesDiv = (
            <div className={styles.ShopImagesSmall} key={`smallImages_${i}`} >
                {restImages.map(({ productImg, _id, name, currentPrice }) => (
                    <div key={_id} className={styles.SmallProductContainer}>
                        <UniProduct key={_id} price={currentPrice} id={_id} name={name} img={productImg} isSmall />
                    </div>
                ))}
            </div>
        );

        setShopElements(prevShopElements => {
            return [...prevShopElements, (
                <div dir={i % 2 === 0 ? 'ltr' : 'rtl'} className={styles.ShopImagesSection} key={`section_${i}`}>
                    {[bigImageDiv, smallImagesDiv]}
                </div>
            )]
    });

    // shopElements.push(
    //     <div dir={i % 2 === 0 ? 'ltr' : 'rtl'} className={styles.ShopImagesSection} key={`section_${i}`}>
    //         {[bigImageDiv, smallImagesDiv]}
    //     </div>
    // );
}

return shopElements;
}