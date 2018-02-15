import showcase, { initialState } from './index'

import { FETCH_BOOK_LIST } from './actions'


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
})