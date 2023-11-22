import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addOneToExistedProduct, removeFromCarts } from '../../redux/reducers/cart-reducer'
import Button from '../Button/Button'
import styles from "./Counter.module.scss"
import axios from 'axios'

const Counter = ({ id, count, data }) => {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const removeOne = () => {
    if (count <= 1) return;

    dispatch(removeFromCarts(id));
    if (token) {
      axios.delete(`http://127.0.0.1:4000/api/cart/product/${id}`, {
        headers: {
          "Authorization": token,
        }
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }

  const addOne = () => {
    dispatch(addOneToExistedProduct(id));

    if (token) {
      axios.put(`http://127.0.0.1:4000/api/cart/${id}`, data, {
        headers: {
          "Authorization": token,
        }
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className={styles.Counter}>
      <Button variant="smallBasket" color="transparent" text="-" onClick={removeOne} />
      <p className={styles.Count}>{count}</p>
      <Button variant="smallBasket" color="transparent" text="+" onClick={addOne} />
    </div>
  )
}

export default Counter