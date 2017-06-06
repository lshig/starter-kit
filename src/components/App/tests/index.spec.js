import React from 'react'
import { shallow } from 'enzyme'
import App from '../index'
describe('<App />', () => {
  it('has a <section> wrapper', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.type()).toBe('section')
  })
  it('has a wrapper contains 1 child', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('section').children().length).toBe(1)
  })
})
