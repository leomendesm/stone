import React from 'react'
import { shallow } from 'enzyme'
import {ShowcaseTest as Showcase} from './showcase'

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

  it('should have a h1 tag when sectionName passed', () => {
    const btn = shallow(<Showcase sectionName="" />)
    expect(btn.find('h1')).toHaveLength(1)
  })
  it('should have a h1 with the sectionName passed', () => {
    const btn = shallow(<Showcase sectionName="test" />)
    expect(btn.find('h1').props().children).toBe("test")
  })
  it('should have a h1 with default text when sectionName not passed', () => {
    const btn = shallow(<Showcase />)
    expect(btn.find('h1').props().children).toBe("Livros mais vendidos")
  })
  it('should have a Button tag when mount', () => {
    const btn = shallow(<Showcase />)
    expect(btn.find('Product')).toHaveLength(1)
  })
})