import axios from 'axios';
import { useState } from 'react';
import MovieCard from './moviecard';

// c6af1f6a

export const API_URL = 'https://www.omdbapi.com/?apikey=c6af1f6a';
// const response = await fetch(`${API_URL}&s=${title}`);

// const res = await fetch(`${API_URL}&i=${id}`);

function App() {
	const [searchValue, setSearchValue] = useState('');
	const [timeoutId, setTimeoutId] = useState();
	const [movieIDs, setMovieIDs] = useState([]);

	const fetchData = async (searchString) => {
		const res = await axios.get(`${API_URL}&s=${searchString}`);
		const data = res.data;
		setMovieIDs(data.Search);
	};

	const onUserInput = (event) => {
		clearTimeout(timeoutId);
		setSearchValue(event.target.value);
		const timeout = setTimeout(() => fetchData(event.target.value), 600);
		setTimeoutId(timeout);
	};

	return (
		<div>
			<h1>Find your film</h1>

			<div>
				<input
					placeholder="Search for movies"
					value={searchValue}
					onChange={onUserInput}
				/>
			</div>
			{movieIDs?.length > 0 ? (
				<div>
					{movieIDs.map((movie, i) => (
						<MovieCard
							movie={movie}
							key={i}
						/>
					))}
				</div>
			) : movieIDs ? (
				<div>
					<h2>Start exploring</h2>
				</div>
			) : (
				<div>
					<h2>Unable to find what you’re looking for. Please try another search.</h2>
				</div>
			)}
		</div>
	);
}

export default App;
