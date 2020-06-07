import React, { Fragment } from 'react';
import spinner from './spinner.gif'; // We can import images because of webpack

const Spinner = () => (
	// If there is no other JS we can return directly instead of return word
	<Fragment>
		<img
			src={spinner}
			alt='Loading...'
			style={{ width: '200px', margin: 'auto', display: 'block' }}
		/>
	</Fragment>
);

export default Spinner;
