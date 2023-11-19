// import Container from "./../../components/Container/Container";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import CartItem from "../../components/CartItem/CartItem";
// import { addToCarts, fetchNewsThunk } from "../../redux/reducers/cart-reducer";
// import styles from "./Cart.module.scss";
// import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
// import useBreadcrumbs from "../../hooks/useBreadcrumbs";
// import Button from "../../components/Button/Button";
// import Arrow from "./img/arrow.svg?react";

// const Cart = () => {
//   const product = useSelector((state) => state.products.products);
//   const carts = useSelector((state) => state.carts.carts);
//   const dispatch = useDispatch();
//   const token = useSelector((state) => state.user.token)
//   const pathParts = useBreadcrumbs();
//   const SHIPPING_PRICE = 50;
//   console.log(carts);
//   useEffect(() => {
//     // const newCart = {
//     //     products: [
//     //       {
//     //         product: "654f588dfa6e291d4de356d8",
//     //         cartQuantity: 1
//     //       }
//     //     ]
//     //   };
      
//     //   fetch("http://127.0.0.1:4000/api/cart", {method: 'POST', headers:{'Authorization': token}, body:newCart}, )
//     //     .then(newCart => {
//     //       /*Do something with newCart*/
//     //     })
//     //     .catch(err => {
//     //       /*Do something with error, e.g. show error to user*/
//     //     }); для реєстрації корзини для певного юзера
    
//     // fetch("http://127.0.0.1:4000/api/cart/654f588dfa6e291d4de356d8", {method: 'PUT', headers:{'Authorization': token}} )
//     // додати продукт до корзини авторизованого юзера 

//     dispatch(fetchNewsThunk()) 
//     // if (product.length && !carts.length) {
//     //   dispatch(addToCarts(product[0]));
//     //   dispatch(addToCarts(product[1]));
//     //   dispatch(addToCarts(product[2]));
//     //   dispatch(addToCarts(product[4]));
//     // }
//   }, [product]);

//   const TotalPrice = (array) => {
//     let number = 0;
//     array.forEach((element) => {
//       number = number + element.currentPrice * element.count;
//       // console.log(element.currentPrice);
//     });
//     return number;
//   };



  
//   return (
//     <div className={styles.CartContainer}>
//       <Container>
//         <h2 className={styles.TitleShoping}>Shopping bag</h2>
//         <Breadcrumbs pathParts={pathParts} />
//         <ul className={styles.List}>
//           {carts?.map(({product, cartQuantity}, index) => (
//             <CartItem
//               id={product._id}
//               key={index}
//               name={product.name}
//               url={product.url}
//               price={product.price}
//               cartQuantity={cartQuantity}
//               article={product.article}
//               categories={product.categories}
//               characteristics={product.characteristics}
//               collection={product.collection}
//               currentPrice={product.currentPrice}
//               productDescription={product.productDescription}
//               productImg={product.productImg}
//               productUrl={product.productUrl}
//               slidesImageUrls={product.slidesImageUrls}
//               cartDescription={product.cartDescription}
//             />
//           ))}
//         </ul>
//         <div className={styles.FinalInfo}>
//           <div className={styles.FinalCost}>
//             <div>
//               <p>Subtotal:</p>
//               <p>Shipping: </p>
//               <p>Total: </p>
//             </div>
//             <div>
//               <p>{TotalPrice(carts).toFixed(2)} uah</p>
//               <p> {SHIPPING_PRICE} uah</p>
//               <p>{(TotalPrice(carts) + SHIPPING_PRICE).toFixed(2)} uah</p>
//             </div>
//           </div>
//           <div className={styles.FinalBtn}>
//             <Button text={"Continue shopping"} />
//             {/* <Button text={"Continue" } >
//                 {<Arrow />}
//             </Button> */}
//             <button className={styles.Continue} type={"button"}>
//               Continue {<Arrow className={styles.Arrow} />}
//             </button>
//           </div>
//         </div>
//         {/* Cart Page */}
//       </Container>
//     </div>
//   );
// };

// export default Cart;








import Container from "./../../components/Container/Container";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import { addToCarts, fetchNewsThunk } from "../../redux/reducers/cart-reducer";
import styles from "./Cart.module.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import Button from "../../components/Button/Button";
import Arrow from "./img/arrow.svg?react";

const Cart = () => {
  const product = useSelector((state) => state.products.products);
  const carts = useSelector((state) => state.carts.carts);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token)
  const pathParts = useBreadcrumbs();
  const SHIPPING_PRICE = 50;
  console.log(carts);
  useEffect(() => {
    // const newCart = {
    //     products: [
    //       {
    //         product: "654f588dfa6e291d4de356d8",
    //         cartQuantity: 1
    //       }
    //     ]
    //   };
      
    //   fetch("http://127.0.0.1:4000/api/cart", {method: 'POST', headers:{'Authorization': token}, body:newCart}, )
    //     .then(newCart => {
    //       /*Do something with newCart*/
    //     })
    //     .catch(err => {
    //       /*Do something with error, e.g. show error to user*/
    //     }); для реєстрації корзини для певного юзера

    // fetch("http://127.0.0.1:4000/api/cart/654f588dfa6e291d4de356d8", {method: 'PUT', headers:{'Authorization': token}} )
    // додати продукт до корзини авторизованого юзера 

    // dispatch(fetchNewsThunk()) 
    if (product.length && !carts.length) {
      dispatch(addToCarts(product[0]));
      dispatch(addToCarts(product[1]));
      dispatch(addToCarts(product[2]));
      dispatch(addToCarts(product[4]));
    }
  }, [product]);

  const TotalPrice = (array) => {
    let number = 0;
    array.forEach((element) => {
      number = number + element.currentPrice * element.count;
      // console.log(element.currentPrice);
    });
    return number;
  };



  
  return (
    <div className={styles.CartContainer}>
      <Container>
        <h2 className={styles.TitleShoping}>Shopping bag</h2>
        <Breadcrumbs pathParts={pathParts} />
        <ul className={styles.List}>
          {carts?.map((product, index) => (
        //   {carts?.map(({product, cartQuantity}, index) => (
            <CartItem
              id={product._id}
              key={index}
              name={product.name}
              url={product.url}
              price={product.price}
              count={product.count}
            //   cartQuantity={cartQuantity}
              article={product.article}
              categories={product.categories}
              characteristics={product.characteristics}
              collection={product.collection}
              currentPrice={product.currentPrice}
              productDescription={product.productDescription}
              productImg={product.productImg}
              productUrl={product.productUrl}
              slidesImageUrls={product.slidesImageUrls}
              cartDescription={product.cartDescription}
            />
          ))}
        </ul>
        <div className={styles.FinalInfo}>
          <div className={styles.FinalCost}>
            <div>
              <p>Subtotal:</p>
              <p>Shipping: </p>
              <p>Total: </p>
            </div>
            <div>
              <p>{TotalPrice(carts).toFixed(2)} uah</p>
              <p> {SHIPPING_PRICE} uah</p>
              <p>{(TotalPrice(carts) + SHIPPING_PRICE).toFixed(2)} uah</p>
            </div>
          </div>
          <div className={styles.FinalBtn}>
            <Button text={"Continue shopping"} />
            {/* <Button text={"Continue" } >
                {<Arrow />}
            </Button> */}
            <button className={styles.Continue} type={"button"}>
              Continue {<Arrow className={styles.Arrow} />}
            </button>
          </div>
        </div>
        {/* Cart Page */}
      </Container>
    </div>
  );
};

export default Cart;