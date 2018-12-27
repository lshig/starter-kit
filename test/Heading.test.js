import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Heading from '../src/components/Heading';

describe('Heading', () => {
  describe('basic', () => {
    const wrapper = shallow(<Heading text="Foobar" />);

    test('renders', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
