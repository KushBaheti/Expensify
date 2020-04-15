import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json' 
import Header from '../../components/Header'

test('Should render Header correctly', () => {
    const wrapper = shallow(<Header />)
    // expect(toJson(wrapper)).toMatchSnapshot()
    expect(wrapper).toMatchSnapshot()


    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
})