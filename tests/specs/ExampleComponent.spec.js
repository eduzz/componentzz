import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ExampleComponent from '../../src/ExampleComponent';

describe('Example Component', () => {
   it('should have h1 to display the example', () => {
       const wrapper = shallow(<ExampleComponent text='First' />);
       expect(wrapper.find('h1')).to.have.length(1);
   });

    it('should have props for text', () => {
        const wrapper = shallow(<ExampleComponent text="First" />);
        expect(wrapper.props().text).to.be.defined;
    });

    it('should create a correct DOM structure', () => {
        const wrapper = shallow(<ExampleComponent text="First" />);
        const componentMock = shallow(<h1>My First Presentational React Component!</h1>);
        expect(wrapper.html()).to.be.equal(componentMock.html());
    });
});
