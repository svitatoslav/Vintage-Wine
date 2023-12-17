import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../../components/Container/Container";
import styles from "./CheckoutSuccess.module.scss";
import {
  DataStatus,
  placeOrderThunk,
} from "../../../redux/reducers/order-reducer";
import Button from "../../../components/Button/Button";
import Loader from "../../../components/Loader/Loader";

const CheckoutSuccess = () => {
  const location = useLocation();
  const sessionId = new URLSearchParams(location.search).get("sessionId");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { placeOrderDataStatus, info: orderInfo } = useSelector(
    (state) => state.order,
  );

  useEffect(() => {
    if (orderInfo && sessionId) {
      dispatch(placeOrderThunk());
    }
  }, [dispatch, sessionId, orderInfo]);

  const navigateToShop = () => {
    navigate("/shop");
  };

  useEffect(() => {
    if (placeOrderDataStatus === DataStatus.FULFILLED) {
      setTimeout(navigateToShop, 9000);
    }

    return () => {
      clearTimeout(navigateToShop);
    };
  }, [placeOrderDataStatus]);

  if (!sessionId) {
    return <Navigate to="/" />;
  }

  return (
    <Container>
      {placeOrderDataStatus === DataStatus.FULFILLED ? (
        <div className={styles.ThanksBox}>
          <img
            className={styles.Image}
            src="https://res.cloudinary.com/dhpukux5x/image/upload/v1698006683/z7j1cej1td8dzuobgxke.png"
            alt="after submite"
          />
          <div className={styles.ThanksText}>
            <p className={styles.MainText}>Thank you for your order!</p>
            <p className={styles.SubText}>
              All information about the order will be in your mail
            </p>
            <p className={styles.RedirectText}>
              You will be soon redirect to Shop page
            </p>
            <Button onClick={() => navigateToShop} text="Continue shopping" />
          </div>
        </div>
      ) : (
        <div className={styles.LoaderWrapper}>
          <Loader />
        </div>
      )}
    </Container>
  );
};

export default CheckoutSuccess;
