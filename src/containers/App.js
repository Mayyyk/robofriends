import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: '',
		};
	}

	onSearchChange = (event) => {
		const searchValue = event.target.value;
		this.setState({ searchField: searchValue });
		console.log(this);
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ robots: users }));
	}

	render() {
		const { robots, searchField } = this.state;
		const filteredRobots = robots.filter((robot) => {
			return robot.name
				.toLowerCase()
				.includes(searchField.toLowerCase());
		});
		if (!robots.length) {
			return <h1>Loading</h1>;
		} else {
			return (
				<div className='tc'>
					<h1>RoboFriends</h1>
					<SearchBox
						searchField={searchField}
						searchChange={this.onSearchChange}
					/>
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
			);
		}
	}
}

export default App;
