import React from 'react'
import { useDispatch } from 'react-redux'
import { addOneToCarts, removeFromCarts } from '../../redux/reducers/cart-reducer'
import Button from '../Button/Button'
import styles from "./Counter.module.scss"

const Counter = ({id, count}) => {
    const dispatch = useDispatch();

    const removeOne = () => {
      if (count <= 1) return;

      const selectedId = JSON.parse(localStorage.getItem('cart')).filter(cartId => cartId === id);
      selectedId.pop();
      const selectedOther = JSON.parse(localStorage.getItem('cart')).filter(cartId => cartId !== id);

      localStorage.setItem('cart', JSON.stringify([...selectedId, ...selectedOther]));
      dispatch(removeFromCarts(id));
    }

    const addOne = () => {
      localStorage.setItem('cart', JSON.stringify([...JSON.parse(localStorage.getItem('cart')), id]));
      dispatch(addOneToCarts(id));
    }
  return (
    <div className={styles.Counter}>
        <Button variant="smallBasket" color="transparent" text="-" onClick={removeOne}/>
        <p className={styles.Count}>{count}</p>
        <Button variant="smallBasket" color="transparent" text="+" onClick={addOne}/>
    </div>
  )
}

export default Counter