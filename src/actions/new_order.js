import { ADD_ORDER_ITEM, REMOVE_ORDER_ITEM } from './action_types';

export const addOrderItem = (restaurant, product, quantity) => async (dispatch) => {
  dispatch({
    type: ADD_ORDER_ITEM,
    restaurant: restaurant,
    product: product,
    quantity: quantity
  });
}

export const removeOrderItem = (orderItem) => {
  return {
    type: REMOVE_ORDER_ITEM,
    orderItem: orderItem
  }
}