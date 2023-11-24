import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";

import productsReducer from "../reducers/products-reducer";
import catalogReducer from "../reducers/catalog-reducer";
import collectionsReducer from "../reducers/collections-reducer";
import authorizationReducer from "../reducers/authorization-reducer";
import mobileMenuReducer from "../reducers/mobMenu-reducer";
// import ViewedProductsReducer from '../reducers/lastViewed-products';
import modalWindowReducer from "../reducers/modalWindow-reducer";
import newsReducer from "../reducers/news-reducer";
import cartsReducer from "../reducers/cart-reducer";
import filtersReducer from "../reducers/filters-reducer";
import fetchViewedProductsReducer from "../reducers/fetchViewedProducts-reducer";

const rootReducer = combineReducers({
  viewedProducts: fetchViewedProductsReducer,
  products: productsReducer,
  catalog: catalogReducer,
  collections: collectionsReducer,
  user: authorizationReducer,
  mobileMenu: mobileMenuReducer,
  carts: cartsReducer,
  filters: filtersReducer,
  modal: modalWindowReducer,
  news: newsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
  whitelist: ["carts", "user", "token", "isLogged"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);

export { store, persistor };
