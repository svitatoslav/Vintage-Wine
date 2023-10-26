import styles from "./Shop.module.scss";
import ShopFilterIcon from "./icons/ShopPlus.svg?react";
import ShopBreadCramp from "./icons/BreadCramp.svg?react";
import { useEffect, useState } from "react";
 
const Shop = () => {
  const links = ["Wine", "Sparkling", "Whiskey", "Strong", "Beer", "Ciders"];
//   const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch("/api/catalog");
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const catalogData = await response.json();
//         setData(catalogData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, []);

  return (
    <div className={styles.ShopContainer}>
      <h1 className={styles.ShopParagraph}>Our Shop</h1>
      <div className={styles.ShopBreadCrumbs}>
        Home <ShopBreadCramp /> Shop (in developmnet)
      </div>
      <div className={styles.ShopFilterBar}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className={styles.ShopFilterBarItems}>
            {/* {data.map((item) => (
              <li key={item.id}>
                <a href={"#"}>{item.name}</a>
              </li>
            ))} */}
            {links.map((link, index) => (
                            <li key={index}>
                                <a href={"#"}>{link}</a>
                            </li>
                        ))}
          </ul>
        )}
        <div className={styles.ShopFilterBarAllFilter}>
          <p>All filters</p>
          <ShopFilterIcon />
        </div>
      </div>
      <div className={styles.ShopImages}>
        
      </div>
    </div>
  );
};

export default Shop;
