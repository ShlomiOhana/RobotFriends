import {shallow} from 'enzyme'; 
import React from 'react';
import Header from './Header';

it('expect to render Header component', ()=> {
expect(shallow(<Header name='John Snow' id={1} email='john@gmail.com' />)).toMatchSnapshot();	
})