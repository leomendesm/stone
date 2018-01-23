import { 
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  INCREMENT_QUANTITY_PRODUCT_ON_CART,
  DECREMENT_QUANTITY_PRODUCT_ON_CART 
} from './actions'

export const addToCart = id => ({
  type: ADD_PRODUCT_TO_CART,
  payload: {
    book: {
      photo,
      title,
      description,
      price
    }
  }
})

export const removeFromCart = index => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: {
    index
  }
})

export const incrementQuantityOnCart = index => ({
  type: INCREMENT_QUANTITY_PRODUCT_ON_CART,
  payload: {
    index
  }
})

export const decrementQuantityOnCart = index => ({
  type: DECREMENT_QUANTITY_PRODUCT_ON_CART,
  payload: {
    index
  }
})