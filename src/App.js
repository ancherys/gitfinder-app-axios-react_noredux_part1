import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
	state = {
		users: [],
		loading: false,
	};
	async componentDidMount() {
		// In react we can not do this.state.loading = true
		this.setState({ loading: true });

		const res = await axios.get(
			`https://api.github.com/users?client_id=${process.env.REACT_APP_GITFINDER_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITFINDER_CLIENT_SECRET}`
		);

		this.setState({ users: res.data, loading: false });
	}

	render() {
		// Users passing as props to users.js (2 props)
		return (
			<div className='App'>
				<Navbar />
				<div className='container'>
					<Users loading={this.state.loading} users={this.state.users} />
				</div>
			</div>
		);
	}
}

export default App;
