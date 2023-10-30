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

const rootReducer = combineReducers({
  products: productsReducer,
  catalog: catalogReducer,
  collections: collectionsReducer,
  user: authorizationReducer,
  mobileMenu: mobileMenuReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
