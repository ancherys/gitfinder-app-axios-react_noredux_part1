import React from 'react';

// Alert is an object with a message inside from app.js
const Alert = ({ alert }) => {
	return (
		alert !== null && (
			<div className={`alert alert-${alert.type}`}>
				<i className='fa fa-info-circle'></i> {alert.msg}
			</div>
		)
	);
};

export default Alert;
