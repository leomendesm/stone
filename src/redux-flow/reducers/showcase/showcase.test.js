import showcase, { initialState } from './index'

import { 
  FETCH_BOOK_LIST,
  FETCH_BOOK_LIST_SUCCESS,
  FETCH_BOOK_LIST_FAIL } from './actions'

import deepFreeze from 'deep-freeze'

describe('Cart reducer', () => {

  describe('Smoke Test', () => {
    it('should cart be a function', () => {
      expect(typeof showcase).toBe('function')
    })
  })

  describe('Initial State', () => {
    it('should return initial state when state is undefined', () => {
      const before = undefined
      const action = deepFreeze({ type: '' })
      const after = initialState
      expect(showcase(before, action)).toEqual(after)
    })

    it('should return state when action is undefined', () => {
      const before = deepFreeze([])
      const action = deepFreeze({ 
        type: ''})
      const after = []
      expect(showcase(before, action)).toEqual(after)
    })
  })

  describe('Fetch book list data', () => {
    it('should return isFetching true when action type is FETCH_BOOK_LIST', () => {
      const before = deepFreeze({
        isFetching: null,
        data: [],
        hasError: false,
        errorMessage: null
      })

      const action = deepFreeze({
        type: FETCH_BOOK_LIST
      })

      const after = {
        isFetching: true,
        data: [],
        hasError: false,
        errorMessage: null
      }

      expect(showcase(before, action)).toEqual(after)
    })
  })

  describe('Fetch book list data responses', () => {

    it('should set data equal to payload and isFetching false when action type is FETCH_BOOK_LIST_SUCCESS', () => {
      const before = deepFreeze({
        isFetching: null,
        data: [],
        hasError: false,
        errorMessage: null
      })

      const action = deepFreeze({
        type: FETCH_BOOK_LIST_SUCCESS,
        payload: [{name: 'book'}, { name: 'book'}]
      })

      const after = {
        isFetching: false,
        data: [{name: 'book'}, {name: 'book'}],
        hasError: false,
        errorMessage: null
      }

      expect(showcase(before, action)).toEqual(after)
    })

    it('should set errorMessage equal to payload, hasError true and isFetching false when action type is FETCH_BOOK_LIST_FAIL', () => {
      const before = deepFreeze({
        isFetching: null,
        data: [],
        hasError: false,
        errorMessage: null
      })

      const action = deepFreeze({
        type: FETCH_BOOK_LIST_FAIL,
        err: 'fail'
      })

      const after = {
        isFetching: false,
        data: [],
        hasError: true,
        errorMessage: 'fail'
      }

      expect(showcase(before, action)).toEqual(after)
    })

  })
})
