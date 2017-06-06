import React from 'react'
import { shallow } from 'enzyme'
import H1 from '../index'
describe('<H1/>', () => {
  it('has <h1> wrapper', () => {
    const wrapper = shallow(<H1 />)
    expect(wrapper.type()).toBe('h1')
  })
  it('contains a prop called text', () => {
    const wrapper = shallow(<H1 />)
    expect(wrapper.prop('text'))
  })
})
