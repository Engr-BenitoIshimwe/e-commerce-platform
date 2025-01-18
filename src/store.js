import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  user: userReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
