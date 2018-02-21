import React from 'react'
import { shallow } from 'enzyme'
import Showcase from './showcase'

import thunk from 'redux-thunk'
import reducers from '../../redux-flow/reducers'
import {
  createStore,
  applyMiddleware } from 'redux'

const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

describe('<Showcase />', () => {

  it('should have a h2 tag when sectionName passed', () => {
    const btn = shallow(<Showcase store={store} sectionName="" />).dive()
    expect(btn.find('h2')).toHaveLength(1)
  })
  it('should have a h2 with the sectionName passed', () => {
    const btn = shallow(<Showcase store={store} sectionName="test" />).dive()
    expect(btn.find('h2').props().children).toBe("test")
  })

  it('should have a Button tag when mount', () => {
    const btn = shallow(<Showcase store={store} />).dive()
    expect(btn.find('Product')).toHaveLength(0)
  })
})