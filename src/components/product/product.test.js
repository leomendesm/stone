import React from 'react'
import { shallow } from 'enzyme'
import Product from './product'

describe('<Product />', () => {
  it('should have 3 div tag when mount', () => {
    const btn = shallow(<Product />)
    expect(btn.find('div')).toHaveLength(3)
  })
  it('should have a Button tag when mount', () => {
    const btn = shallow(<Product />)
    expect(btn.find('Button')).toHaveLength(1)
  })
})