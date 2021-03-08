import { Component } from 'react';

interface UserSearchProps {
	users: {
		name: string;
		age: number;
	}[];
}

interface UserSearchState {
	name: string;
	user: { name: string; age: number } | undefined;
}

class UserSearch extends Component<UserSearchProps> {
	state: UserSearchState = {
		name: '',
		user: undefined,
	};

	onClick = () => {
		const foundUser = this.props.users.find((user) => {
			return user.name === this.state.name;
		});

		this.setState({ user: foundUser });
	};

	render() {
		const { name, user } = this.state;

		return (
			<div>
				User Search
				<input value={this.state.name} onChange={(e) => this.setState(e.target.value)}></input>
				<button onClick={this.onClick}>Find User</button>
				<div>
					{user && user.name}
					<br />
					{user && user.age}
				</div>
			</div>
		);
	}
}

export default UserSearch;
