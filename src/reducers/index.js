import { combineReducers } from 'redux';
import RestaurantsReducer from './restaurantsReducer';
import ModalReducer from './modalReducer';
import AddressReducer from './addressReducer';
import NewOrderReducer from './newOrderReducer';
import OrderReducer from './orderReducer';

export default combineReducers({
  restaurantsState: RestaurantsReducer,
  modalState: ModalReducer,
  addressState: AddressReducer,
  newOrderState: NewOrderReducer,
  orderState: OrderReducer
});