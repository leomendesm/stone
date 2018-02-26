import React from 'react'
import { shallow } from 'enzyme'
import Button from './button'

describe('<Button />', () => {
  it('should have a div tag when mount', () => {
    const btn = shallow(<Button text={""} clickHandler={()=>{}} />)
    expect(btn.find('div')).toHaveLength(1)
  })

  it('should not have a MdAddShoppingCart tag when showcart is undefined', () => {
    const btn = shallow(<Button text={""} clickHandler={()=>{}} />)
    expect(btn.find('MdAddShoppingCart')).toHaveLength(0)
  })
  it('should not have a MdAddShoppingCart tag when showcart is false', () => {
    const btn = shallow(<Button text={""} clickHandler={()=>{}} showCart={false} />)
    expect(btn.find('MdAddShoppingCart')).toHaveLength(0)
  })
  it('should have a MdAddShoppingCart tag when showcart is true', () => {
    const btn = shallow(<Button text={""} clickHandler={()=>{}} showCart={true} />)
    expect(btn.find('MdAddShoppingCart')).toHaveLength(1)
  })
  it('should add a new class to button if onCart prop is true', () => {
    const btn = shallow(<Button text={""} clickHandler={()=>{}} onCart={true} />)
    expect(btn.find('div').props().className).toBe(" ")
  })
})