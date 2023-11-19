import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeCount, removeFromCarts } from '../../redux/reducers/cart-reducer'
import Button from '../Button/Button'
import styles from "./Counter.module.scss"

const Counter = ({id, count}) => {
    const dispatch = useDispatch()
  return (
    <div className={styles.Counter}>
        <Button typeBtn="smallBasket" color="transparent" text={"-"} onClick={() => {
            if(count === 1){
              color = "gray"
                // dispatch(removeFromCarts(id))
            } else {
                dispatch(changeCount({id, operator : "-"}));
            }
          }}/>
        <p className={styles.Count}>{count}</p>
        <Button typeBtn="smallBasket" color="transparent" text={"+"} onClick={() => {
            dispatch(changeCount({id, operator : "+"}));
          }}/>
    </div>
  )
}

export default Counter