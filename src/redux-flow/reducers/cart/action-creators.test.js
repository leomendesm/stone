import { 
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  INCREMENT_QUANTITY_PRODUCT_ON_CART,
  DECREMENT_QUANTITY_PRODUCT_ON_CART 
} from './actions'

import { 
  removeFromCart,
  incrementQuantityOnCart,
  decrementQuantityOnCart } from './action-creators'

describe('Cart actions', () => {
  it('should create an action to increment quantity on cart', () => {
    const index = 0
    const expectedAction = {
      type: INCREMENT_QUANTITY_PRODUCT_ON_CART,
      payload: {
        index
      }
    }
    expect(incrementQuantityOnCart(index)).toEqual(expectedAction)
  })

  it('should create an action to decrement quantity on cart', () => {
    const index = 0
    const expectedAction = {
      type: DECREMENT_QUANTITY_PRODUCT_ON_CART,
      payload: {
        index
      }
    }
    expect(decrementQuantityOnCart(index)).toEqual(expectedAction)
  })

  it('should create an action to remove a item from cart', () => {
    const index = 0
    const expectedAction = {
      type: REMOVE_PRODUCT_FROM_CART,
      payload: {
        index
      }
    }
    expect(removeFromCart(index)).toEqual(expectedAction)
  })
})