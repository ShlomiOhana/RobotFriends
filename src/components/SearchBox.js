import React from 'react';

const SerachBox = ({searchChange}) => {
	return (
		<div className='pa2'>
			<input
			aria-label='Search Robots'
			className='pa3 ba b--green bg-lightest-blue'
			type='search'
			placeholder='search your robots here'
			onChange={searchChange}
			size="35"
			/>
		</div>	
	);
}

export default SerachBox;