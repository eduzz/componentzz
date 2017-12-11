import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ProfessionalCard from '../../src/cards/ProfessionalCard';

describe('Professional Component', () => {
    it('should have props for name, profession, email, phone, site', () => {
        const wrapper = shallow(<ProfessionalCard name="The Flash" profession="Super Heroe" email="theflash@dc.com" phone="11111" site="http://flash.com" />);
        expect(wrapper.props().name).to.be.defined;
        expect(wrapper.props().profession).to.be.defined;
        expect(wrapper.props().email).to.be.defined;
        expect(wrapper.props().phone).to.be.defined;
        expect(wrapper.props().site).to.be.defined;
    });

    it('should create a correct DOM structure', () => {
        const wrapper = shallow(<ProfessionalCard name="The Flash" profession="Super Heroe" email="theflash@dc.com" phone="11111" site="http://flash.com" />);
        const componentMock = 
        shallow( <div className="container">
                    <div className='card'>
                        <figure className="front">
                            <img src="[object Object]" alt="front"></img>
                            <div className="caption">
                                <h2>The Flash</h2>
                                <p>Super Heroe</p>
                                <a>View more</a>
                            </div>
                        </figure>

                        <figure className="back">
                            <img src="[object Object]" alt="back" />
                            <div className="caption">
                                <dl>
                                    <dt>Phone</dt>
                                    <dd>11111</dd>
                                    <dt>Email</dt>
                                    <dd>theflash@dc.com</dd>
                                    <dt>Web</dt>
                                    <dd>http://flash.com</dd>
                                </dl>
                            </div>
                        </figure>
                    </div>
                </div>);
        expect(wrapper.html()).to.be.equal(componentMock.html());
    });
});
