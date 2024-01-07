import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Slider from "react-slick";
import ReactPaginate from "react-paginate";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import PageTitle from "../../../components/Title/PageTitle";
import Container from "../../../components/Container/Container";
import styles from "./Orders.module.scss";
import "./SlickSlider.scss";
import {
  DataStatus,
  getOrderInfoThunk,
} from "../../../redux/reducers/order-reducer";
import Loader from "../../../components/Loader/Loader";
import EmptyCartText from "../../../components/CartItem/EmptyCartText/EmptyCartText";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useResize from "../../../hooks/useResize";
import { formattedDate } from "../../../helpers/formatteDate";

const MIN_VALUE = 320;
const MID_VALUE = 460;
const BIG_VALUE = 768;
const MAX_VALUE = 1000;
const getSlidesToShow = (viewportWidth) => {
  if (viewportWidth > MIN_VALUE && viewportWidth <= MID_VALUE) {
    return 1;
  }
  if (viewportWidth > MID_VALUE && viewportWidth <= BIG_VALUE) {
    return 2;
  }
  if (viewportWidth > BIG_VALUE && viewportWidth <= MAX_VALUE) {
    return 3;
  }
  return 4;
};

const itemsPerPage = 3;

const Orders = () => {
  const orders = useSelector((state) => state.order.orderHistory);
  const user = useSelector((state) => state.user.user);
  const viewportWidth = useResize();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedOrders = orders.slice(startIndex, endIndex);
  const numberOfPages = Math.ceil(orders.length / itemsPerPage);

  useEffect(() => {
    dispatch(getOrderInfoThunk());
  }, [dispatch]);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage + 1);
  };

  const settings = {
    className: "center",
    slidesToShow: getSlidesToShow(viewportWidth),
    swipeToSlide: false,
    infinite: false,
  };

  const orderInfoDataStatus = useSelector(
    (state) => state.order.getOrderDataStatus,
  );

  const isOrderLoading = orderInfoDataStatus === DataStatus.PENDING;

  let content;

  if (isOrderLoading) {
    content = (
      <div className={styles.LoaderWrapper}>
        <Loader />
      </div>
    );
  }

  if (!isOrderLoading && orders.length === 0) {
    content = <EmptyCartText text="Orders not found" />;
  }

  const handleAddProduct = (id) => {
    localStorage.setItem("viewedProducts", id);
  };

  const style = viewportWidth < BIG_VALUE ? { display: "none" } : {};

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (orders.length > 0) {
    content = (
      <div>
        {displayedOrders.map((order) => (
          <div key={order.orderNo} className={styles.ContentInfoWrapper}>
            <ul style={style} className={styles.OrderInfoNameWrapper}>
              <li className={styles.OrderNameItem}>Order number</li>
              <li className={styles.OrderNameItem}>Order date</li>
              <li className={styles.OrderNameItem}>Order price </li>
              <li className={styles.OrderNameItem}>Delivery Address</li>
              <li className={styles.OrderNameItem}>Email</li>
            </ul>
            <div className={styles.OrderInfoWrapper} key={order.orderNo}>
              <p className={styles.OrderItem}>{order.orderNo}</p>
              <p className={styles.OrderItem}>{formattedDate(order.date)}</p>
              <p className={styles.OrderItem}>
                {order.totalSum.toFixed(2)} UAH
              </p>
              <p className={styles.OrderItem}>
                {order.deliveryAddress.address}, {order.deliveryAddress.city}
              </p>
              <p className={styles.OrderItem}>{order.email}</p>
            </div>
            <div className={styles.ProductWrapper}>
              <Slider className={styles.SliderWrapper} {...settings}>
                {order.products.map((product) => (
                  <Link
                    className={styles.ProductItemWrapper}
                    onClick={() => handleAddProduct(product.instance._id)}
                    key={product.instance._id}
                    to={`/shop/${product.instance._id}`}
                  >
                    <img
                      className={styles.ProductImg}
                      src={`${product.instance.productImg}`}
                      alt="product img"
                    />
                    <p className={styles.ProductItemText}>
                      {product.instance.name}
                    </p>
                    <p>Quantity: {product.quantity}</p>
                  </Link>
                ))}
              </Slider>
            </div>
          </div>
        ))}
        {numberOfPages > 1 && (
          <ReactPaginate
            breakLabel="..."
            nextLabel={<FaGreaterThan />}
            previousLabel={<FaLessThan />}
            onPageChange={handlePageClick}
            pageCount={numberOfPages}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            renderOnZeroPageCount={null}
            containerClassName={styles.Pagination}
            activeLinkClassName={styles.ActiveBtn}
            nextClassName={styles.ControleBtn}
            nextLinkClassName={styles.ControleBtn}
            previousClassName={styles.ControleBtn}
            previousLinkClassName={styles.ControleBtn}
            pageLinkClassName={styles.PageBtn}
          />
        )}
      </div>
    );
  }

  return (
    <Container>
      <PageTitle text="My Orders" />
      <div className={styles.Wrapper}>{content}</div>
    </Container>
  );
};

export default Orders;
