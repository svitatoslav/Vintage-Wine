import axios from "axios";
import { removeCartThunk } from "./cart-reducer";
import { createOrderLetter } from "../../helpers/createLetterHtml";
import { hideLoadingAC, showLoadingAC } from "./loading-reducer";

export const DataStatus = {
  IDLE: "idle",
  PENDING: "pending",
  FULFILLED: "fulfilled",
};

const SET_ORDER_INFO = "SET_ORDER_INFO";
const SET_PLACE_ORDER_DATA_STATUS = "SET_PLACE_ORDER_DATA_STATUS";

const initialState = {
  info: null,
  placeOrderDataStatus: DataStatus.IDLE,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER_INFO: {
      return {
        ...state,
        info: action.payload,
      };
    }
    case SET_PLACE_ORDER_DATA_STATUS: {
      return {
        ...state,
        placeOrderDataStatus: action.payload,
      };
    }
    default:
      return state;
  }
};

const setOrderInfoAC = (orderInfo) => ({
  type: SET_ORDER_INFO,
  payload: orderInfo,
});

export const setInfoDataStatusAC = (infoDataStatus) => ({
  type: SET_PLACE_ORDER_DATA_STATUS,
  payload: infoDataStatus,
});

export const placeOrderThunk = (info) => async (dispatch, getState) => {
  const {
    carts: { carts },
    user: { token, userId, user },
  } = getState();

  const newOrder = {
    deliveryAddress: {
      city: info.city,
      country: info.country,
      address: info.address,
    },
    mobile: info.phone,
    email: info.email,
    shipping: `${info.city} 50UAH`,
    letterHtml: createOrderLetter(info, carts)
  };

  if (!token) {
    newOrder.products = carts;
  } else {
    newOrder.customerId = userId;
  }

  dispatch(setInfoDataStatusAC(DataStatus.PENDING));
  dispatch(showLoadingAC());
  const { data } = await axios.post(
    "http://localhost:4000/api/orders",
    newOrder,
  );

  dispatch(setInfoDataStatusAC(DataStatus.FULFILLED));
  dispatch(setOrderInfoAC(data.order));
  dispatch(hideLoadingAC());
  dispatch(removeCartThunk());
};

export default orderReducer;
