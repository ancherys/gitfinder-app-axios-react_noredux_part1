import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
	// We do not need any state here because state is coming as props from app.js file
	// Loading is passed from app.js
	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div style={userStyle}>
				{users.map(user => (
					// user={user} passing as a prop to UserItems
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
};

Users.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
};

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3,1fr)',
	gridGap: '1rem',
};

export default Users;
