import axios from "axios";

const SET_ORDER_INFO = "SET_ORDER_INFO";

const initialState = {
  orderInfo: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER_INFO: {
      return {
        ...state,
        orderInfo: action.payload,
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
    letterSubject: "Thank you for order! You are welcome!",
    letterHtml: `
    <h1>${user ? `${user}, your ` : "Your"}order is placed.</h1>
    <div>
      <h3>Delivery Address</h3>    
      <ul>
        <li>Country: ${info.country}</li>
        <li>City: ${info.city}</li>
        <li>Address: ${info.address}</li>
      </ul>
      <p>Mobile: ${info.phone}</p>
    </div>`,
  };

  if (!token) {
    newOrder.products = carts;
  } else {
    newOrder.customerId = userId;
  }

  const { data } = await axios.post(
    "http://localhost:4000/api/orders",
    newOrder,
  );

  dispatch(setOrderInfoAC(data.order));
  console.log(placeOrderThunk);
};

export default orderReducer;
