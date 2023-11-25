import React, { useEffect, useState } from 'react';
import styles from './CartMergeModal.module.scss';
import Button from '../../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addToCarts } from '../../../redux/reducers/cart-reducer';
import { toggleModalAC } from '../../../redux/reducers/modalWindow-reducer';
import axios from 'axios';

const CartMergeModal = () => {
  const currentCart = useSelector((state) => state.carts.carts);
  const [cart, setCart] = useState([]);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://127.0.0.1:4000/api/cart', {
          method: 'GET',
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
          },
        });

        const result = await response.json();

        setCart(result.products);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  function mergeArrays(array) {
    const result = [];
    const usedId = [];

    for (const elem of array) {
      if (usedId.includes(elem.instance._id)) {
        continue;
      }
      const newArray = [elem];
      usedId.push(elem.instance._id);

      const dublicates = array.filter(item => item.instance._id === newArray[0].instance._id);

      if (dublicates.length > 1) {
        const reducedQuantity = dublicates.reduce((acc, curr) => acc.quantity + curr.quantity);
        result.push({
          quantity: reducedQuantity,
          instance: dublicates[0].instance
        })
      } else {
        result.push(...dublicates);
      }
    }

    return result;
  }

  const merged = [...cart, ...currentCart];
  const resultArray = mergeArrays(merged);

  const updateCart = (cartState) => {
    let body;
    if (cartState) {
      body = { products: cartState };
      dispatch(addToCarts(cartState));
    } else {
      body = { products: currentCart };
    }

    axios.put('http://127.0.0.1:4000/api/cart/', body, {
      headers: {
        "Authorization": token,
      }
    })
      .then((res) => console.log(res.statusText))
      .catch((err) => console.log(err));

    dispatch(toggleModalAC());
  }

  return (
    <div className={styles.CartModal} data-testid="CartMergeModal">
      <p className={styles.CartModalText}>Some products have been added to your cart before and saved in your account. Would you like to update your current shopping cart status?</p>
      <div className={styles.CartModalContent}>
        <div className={styles.CartModalList}>
          <h4 className={styles.CartModalLabel}>Previous cart state:</h4>
          <div className={styles.CartModalTable}>
            <div className={styles.CartModalItem}>
              <div className={styles.CartModalHeader} >Product name</div>
              <div className={styles.CartModalHeader}>Quantity</div>
            </div>
            <ul>
              {cart?.map(({ quantity, instance }) => {
                return (
                  <li key={instance._id} className={styles.CartModalItem}>
                    <div>{instance.name}</div>
                    <div>{quantity}</div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className={styles.CartModalList}>
          <h4 className={styles.CartModalLabel}>Current cart state:</h4>
          {currentCart.length > 0 ?
            (<div className={styles.CartModalTable}>
              <div className={styles.CartModalItem}>
                <div className={styles.CartModalHeader} >Product name</div>
                <div className={styles.CartModalHeader}>Quantity</div>
              </div>
              <ul>
                {currentCart?.map(({ quantity, instance }) => {
                  return (
                    <li key={instance._id} className={styles.CartModalItem}>
                      <div>{instance.name}</div>
                      <div>{quantity}</div>
                    </li>
                  )
                })}
              </ul>
            </div>) : (
              <div style={{ textAlign: "center" }}>Empty</div>
            )}
        </div>
        <div className={styles.CartModalList}>
          <h4 className={styles.CartModalLabel}>Your cart after update:</h4>
          <div className={styles.CartModalTable}>
            <div className={styles.CartModalItem}>
              <div className={styles.CartModalHeader} >Product name</div>
              <div className={styles.CartModalHeader}>Quantity</div>
            </div>
            <ul>
              {resultArray?.map(({ quantity, instance }) => {
                return (
                  <li key={instance._id} className={styles.CartModalItem}>
                    <div>{instance.name}</div>
                    <div>{quantity}</div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.CartModalBtns}>
        <Button text="Yes, update the cart" variant='smallAdaptive' onClick={() => updateCart(resultArray)} />
        <Button text="No, leave the current state" variant='smallAdaptive' onClick={() => updateCart()} />
      </div>
    </div>
  );
}


export default CartMergeModal;