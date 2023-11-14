import { composeWithDevTools } from '@redux-devtools/extension';
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import productsReducer from '../reducers/products-reducer';
import catalogReducer from '../reducers/catalog-reducer';
import collectionsReducer from '../reducers/collections-reducer';
import authorizationReducer from '../reducers/authorization-reducer';
import mobileMenuReducer from '../reducers/mobMenu-reducer';
import ViewedProductsReducer from '../reducers/lastViewed-products';
import filtersReducer from '../reducers/filters-reducer';
// import modalWindowReducer from '../reducers/modalWindow-reducer';
// import newsReducer from "../reducers/news-reducer";

const rootReducer = combineReducers({
  viewedProducts: ViewedProductsReducer,
  products: productsReducer,
  catalog: catalogReducer,
  collections: collectionsReducer,
  user: authorizationReducer,
  mobileMenu: mobileMenuReducer,
  filters: filtersReducer,
  modal: modalWindowReducer,
  news: newsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
