import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from './dasshboard';

Enzyme.configure({ adapter: new Adapter()});

describe('Dashboard', () =>{
    it('should show text', () =>{
        const wrapper = shallow(<Dashboard />);
        const text = wrapper.find("p");
        expect(text).toBe('profile');
    })
})