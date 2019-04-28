import React from 'react';
//import CardList from './CardList';

const Scroll = (props) => {
	return (
	  <div style={{overflowY: 'scroll', height: '800px'}}>
		{props.children}
	  </div>
	);
};

export default Scroll;