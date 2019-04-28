import React from 'react';

const SerachBox = ({searchChange}) => {
	console.log('SerachBox');
	return (
		<div className='pa2'>
			<input
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