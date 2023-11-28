import PageTitle from "../../components/Title/PageTitle";
import Container from "../../components/Container/Container";
import {Link} from "react-router-dom";
import styles from "./Customer.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setTokenAC, setUserAC} from "../../redux/reducers/authorization-reducer";
import {clearCartAC} from "../../redux/reducers/cart-reducer";

const Customer = () => {
    const user = useSelector((state) => state.user.user);
    const token = useSelector((state) => state.user.token);
    const cart = useSelector((state) => state.carts.carts)



    const dispatch = useDispatch()
    const handleSignOut = () => {
        dispatch(setTokenAC(null))
        dispatch(setUserAC(null))
        dispatch(clearCartAC())
    }



    return (
        <Container>
            <PageTitle text="My Profile"/>
            <aside className={styles.Aside}>
                <h2 className={styles.Name}>Hi {user}</h2>
                <ul className={styles.ListWrapper}>
                    <li className={styles.ListItem}>Your Orders</li>
                    <Link to="/contacts">
                        <li className={styles.ListItem}>Contacts</li>
                    </Link>
                    <Link to="/"><li onClick={handleSignOut} className={styles.ListItem}> Sign out </li></Link>
                </ul>
            </aside>
        </Container>
    )
}
export default Customer;