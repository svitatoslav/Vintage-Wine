/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../components/Title/PageTitle";
import Container from "../../components/Container/Container";
import styles from "./Customer.module.scss";
import { signOutAC } from "../../redux/reducers/authorization-reducer";
import { clearCartAC } from "../../redux/reducers/cart-reducer";
import Button from "../../components/Button/Button";
import { getOrderInfoThunk } from "../../redux/reducers/order-reducer";

const Customer = () => {
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signOutAC());
    dispatch(clearCartAC());
  };

  return (
    <Container>
      <PageTitle text="My Profile" />
      <aside className={styles.Aside}>
        <h2 className={styles.Name}>Hi {user}</h2>
        <ul className={styles.ListWrapper}>
          <li className={styles.ListItem}>
            <Link className={styles.Link} to="/orders">
              Your Orders
            </Link>
          </li>
          <li className={styles.ListItem}>
            <Link className={styles.Link} to="/contacts">
              Contacts
            </Link>
          </li>
          <li onClick={handleSignOut} className={styles.ListItem}>
            <Link className={styles.Link} to="/">
              Sign out
            </Link>
          </li>
        </ul>
      </aside>
    </Container>
  );
};
export default Customer;
