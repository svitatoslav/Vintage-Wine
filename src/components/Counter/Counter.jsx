import React from 'react'
import { useDispatch } from 'react-redux'
import { addOneToExistedProduct, removeFromCarts } from '../../redux/reducers/cart-reducer'
import Button from '../Button/Button'
import styles from "./Counter.module.scss"

const Counter = ({id, count}) => {
    const dispatch = useDispatch();

    const removeOne = () => {
      if (count <= 1) return;

      dispatch(removeFromCarts(id));
    }

    const addOne = () => {
      dispatch(addOneToExistedProduct(id));
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