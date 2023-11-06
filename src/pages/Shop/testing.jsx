const ShopElements =  () => {
    return (
        <div>
            {
               products.length > 0 && (
                <div className={styles.ShopImagesSection}>
                    <div className={styles.ShopImagesSectionBigImage}onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                    
                        <LazyLoadImage  src={products[0].productImg} alt="Big Product" effect="blur"/>
                        {isHovered && (
                            <div className={styles.ShopProductHover}>
                                <p className={styles.ShopProductHoverName}>{name}</p>
                                <p className={styles.ShopProductHoverPrice}>{currentPrice}</p>
                                <Button text="Add to cart" />
                            </div>
                        )}
                    </div>
                    <div className={styles.ShopImagesSmall}>
                    {products.slice(1, 5).map((product) => (
                        <LazyLoadImage key={product._id} src={product.productImg} alt="Small Product" effect="blur"/>
                    ))}
                    </div>
                </div>
               ) 
            }
        </div>
    )
};


<div key={_id} className={styles.ShopImagesSection}>
            <div className={styles.ShopImagesSectionBigImage}onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} > 
                <LazyLoadImage  src={productImg} alt={name} effect="blur"/>
                {isHovered && (
                  <div className={styles.ShopProductHover}>
                    <p className={styles.ShopProductHoverName}>{name}</p>
                    <p className={styles.ShopProductHoverPrice}>{currentPrice}</p>
                    <Button text="Add to cart" />
                  </div>
                  )}
            </div>
            <div className={styles.ShopImagesSmall}>
                <LazyLoadImage src={productImg} alt={name} effect="blur"/>
                <LazyLoadImage src={productImg} alt={name} effect="blur"/>
                <LazyLoadImage src={productImg} alt={name} effect="blur"/>
                <LazyLoadImage src={productImg} alt={name} effect="blur"/>
            </div>
        </div>


return (
    <div>
      {products.length > 0 && (
        <div>
          {/* Displaying one big image */}
          <img src={products[0].productImg} alt="Big Product" />

          <div style={{ display: 'flex' }}>
            {/* Displaying four smaller images */}
            {products.slice(1, 5).map((product) => (
              <img key={product._id} src={product.productImg} alt="Small Product" style={{ width: '25%', margin: '5px' }} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
