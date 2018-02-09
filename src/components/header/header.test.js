import React from 'react'
import { shallow } from 'enzyme'
import Header from './header'

describe('<Header />', () => {
  it('should have a div tag when mount', () => {
    const btn = shallow(<Header />)
    expect(btn.find('header')).toHaveLength(1)
  })
  it('should have a MdShoppingCart tag when mount', () => {
    const btn = shallow(<Header />)
    expect(btn.find('MdShoppingCart')).toHaveLength(1)
  })
})