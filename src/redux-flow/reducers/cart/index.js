import { 
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  INCREMENT_QUANTITY_PRODUCT_ON_CART,
  DECREMENT_QUANTITY_PRODUCT_ON_CART 
} from './actions'

export const initialState = []

const cart = (state = initialState, action) => {
  switch(action.type){
    case ADD_PRODUCT_TO_CART: 
      if(state.filter(item => item.id === action.payload.id).length > 0)
        return state.map(p => p.id === action.payload.id? {...p, quantity: p.quantity + 1} : p)
      else
        return state.concat({...action.payload, quantity: 1})
    case REMOVE_PRODUCT_FROM_CART: return state.filter((_, index) => index !== action.payload.index)
    case INCREMENT_QUANTITY_PRODUCT_ON_CART: return state.map((p, index) => index === action.payload.index? {...p, quantity: p.quantity + 1} : p)
    case DECREMENT_QUANTITY_PRODUCT_ON_CART: return state.map((p, index) => index === action.payload.index? {...p, quantity: p.quantity - 1} : p)
    default: return state
  }
}

export default cart
