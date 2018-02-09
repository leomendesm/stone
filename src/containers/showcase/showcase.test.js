import React from 'react'
import { shallow } from 'enzyme'
import Showcase from './showcase'

describe('<Showcase />', () => {

  it('should have a h2 tag when sectionName passed', () => {
    const btn = shallow(<Showcase sectionName="" />)
    expect(btn.find('h2')).toHaveLength(1)
  })
  it('should have a h2 with the sectionName passed', () => {
    const btn = shallow(<Showcase sectionName="test" />)
    expect(btn.find('h2').props().children).toBe("test")
  })

  it('should have a Button tag when mount', () => {
    const btn = shallow(<Showcase />)
    expect(btn.find('Product')).toHaveLength(3)
  })
})