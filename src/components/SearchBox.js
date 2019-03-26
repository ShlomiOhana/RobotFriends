import React from 'react';

const SerachBox = ({searchChange}) => {
	return (
		<div className='pa2'>
			<input
			className='pa3 ba b--green bg-lightest-blue'
			type='search'
			placeholder='search your fucking robots here'
			onChange={searchChange}
			size="35"
			/>
		</div>	
	);
}

export default SerachBox;