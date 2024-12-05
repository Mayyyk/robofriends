import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

function App() {
	const [robots, setRobots] = useState([]); // robots = state, setRobots = function that changes the state
	const [searchField, setSearchField] = useState(''); // array destructuring that allows us name the given state however we want
	const [count, setCount] = useState(0)

	useEffect(() => { // useEffect is run automatically by default every time the component renders
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => setRobots(users));
		console.log(count)
	}, [count]); // the second argument is what triggers the useEffect to run

	const onSearchChange = (event) => {
		setSearchField(event.target.value);
	};

	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	});


	if (!robots.length) {
		return <h1>Loading</h1>;
	}

	return (
		<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchField={searchField} searchChange={onSearchChange} />
			<Scroll>
				<CardList robots={filteredRobots} />
			</Scroll>
		</div>
	);
}

export default App;
