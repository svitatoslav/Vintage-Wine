import React, { useEffect, useState } from 'react';
import styles from './CartMergeModal.module.scss';
import Button from '../../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addToCarts } from '../../../redux/reducers/cart-reducer';
import { toggleModalAC } from '../../../redux/reducers/modalWindow-reducer';

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
    console.log(cartState);
    let body;
    if (cartState) {
      body = cartState;
      dispatch(addToCarts(...cartState));
    } else {
      body = currentCart;
      console.log(body, 'body');
      console.log(currentCart, 'cart');
    }
    (async () => {
      try {
        const response = await fetch('http://127.0.0.1:4000/api/cart', {
          method: 'PUT',
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
          },
          body: body
        });

        const result = await response.json();

        console.log(result);
      } catch (err) {
        console.log(err);
      }
    })();
    dispatch(toggleModalAC());
  }

  return (
    <div className={styles.CartModal} data-testid="CartMergeModal">
      <p className={styles.CartModalText}>Some products have been added to your cart before and saved in your account. Would you like to update your current shopping cart status?</p>
      <div>
        <div className={styles.CartModalList}>
          <h4>Previous cart state:</h4>
          <ul>
            {cart.map(({ quantity, instance }) => {
              return (
                <li key={instance._id} className={styles.CartModalItem}>
                  <div>{instance.name}</div>
                  <div>{quantity}</div>
                </li>
              )
            })}
          </ul>
        </div>
        {currentCart.length > 0 && (
          <div className={styles.CartModalList}>
            <h4>Current cart state:</h4>
            <ul>
              {currentCart.map(({ quantity, instance }) => {
                return (
                  <li key={instance._id} className={styles.CartModalItem}>
                    <div>{instance.name}</div>
                    <div>{quantity}</div>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
        <div className={styles.CartModalList}>
          <h4>The cart state after update:</h4>
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
      <div className={styles.CartModalBtns}>
        <Button text="Yes, update the cart" variant='smallAdaptive' onClick={() => updateCart(resultArray)} />
        <Button text="No, leave the current state" variant='smallAdaptive' onClick={() => updateCart()}/>
      </div>
    </div>
  );
}


export default CartMergeModal;
