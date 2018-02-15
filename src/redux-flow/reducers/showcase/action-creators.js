import {
  FETCH_BOOK_LIST,
  FETCH_BOOK_LIST_SUCCESS,
  FETCH_BOOK_LIST_FAIL
} from './actions'

import { API_URL } from '../../../utils'

import axios from 'axios'

export function FetchBookList (dispatch) {
  return dispatch => {
    dispatch({ type: FETCH_BOOK_LIST })
    return axios.get(`${API_URL}`)
      .then(res => dispatch({ type: FETCH_BOOK_LIST_SUCCESS, payload: res.data.items }))
      .catch(err => dispatch({ type: FETCH_BOOK_LIST_FAIL, payload: err }))
  }
}