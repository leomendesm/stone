import { 
  FETCH_BOOK_LIST,
  FETCH_BOOK_LIST_SUCCESS,
  FETCH_BOOK_LIST_FAIL
} from './actions'

export const initialState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null
}

const showcase = (state = initialState, action) => {
  switch(action.type){
    case FETCH_BOOK_LIST:
    return Object.assign({}, state, {
      isFetching: true,
      data: [],
      hasError: false,
      errorMessage: null
    })
    case FETCH_BOOK_LIST_SUCCESS:
      const res = action.payload.map(book => ({...book}))
      return Object.assign({}, state, {
        isFetching: false,
        data: res,
        hasError: false,
        errorMessage: null
      })
    case FETCH_BOOK_LIST_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        data: [],
        hasError: true,
        errorMessage: action.err
      })
    default: return state
  }
}

export default showcase
