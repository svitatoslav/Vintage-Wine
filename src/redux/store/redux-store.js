import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from '../reducers/products-reducer';
const rootReducer = combineReducers({
  products: productsReducer
});
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
