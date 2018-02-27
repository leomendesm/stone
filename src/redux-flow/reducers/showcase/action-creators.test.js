import {
  FETCH_BOOK_LIST,
  FETCH_BOOK_LIST_SUCCESS,
  FETCH_BOOK_LIST_FAIL } from './actions'

import{ FetchBookList, RequestAPI } from './action-creators'

import { API_URL } from '../../../utils'

import MockAdapter from 'axios-mock-adapter'

import axios from 'axios'

describe('Showcase action creators', () => {
  it('should call dispatch when called', done => {
    var mock = new MockAdapter(axios)
    const data = { response: true }
    mock.onGet(API_URL).reply(200, data)
    const mockCallback = jest.fn()
    FetchBookList(mockCallback)
    expect(mockCallback.mock.calls.length).toBe(1)
    done()
  })
  it('should call dispatch when request success', done => {
    var mock = new MockAdapter(axios)
    const data = { response: true }
    mock.onGet(API_URL).reply(200, data)
    const mockCallback = jest.fn()
    RequestAPI(mockCallback)
    done()
    expect(mockCallback.mock.calls.length).toBe(0)
  })
  it('should call dispatch when request fail', done => {
    var mock = new MockAdapter(axios)
    const data = { response: true }
    mock.onGet(API_URL).reply(500, data)
    const mockCallback = jest.fn()
    RequestAPI(mockCallback)
    expect(mockCallback.mock.calls.length).toBe(0)
    done()
  })
})