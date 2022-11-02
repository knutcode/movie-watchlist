import axios from 'axios';
import { useState } from 'react';
import Moviecard from '../components/Moviecard';

export const API_URL = 'https://www.omdbapi.com/?apikey=c6af1f6a';

function Home() {
	const [searchValue, setSearchValue] = useState('');
	const [timeoutId, setTimeoutId] = useState();
	const [movieIDs, setMovieIDs] = useState([]);

	// API call to get the IMDb ID's for matching movies based on user input
	// IMDb ID's later passed as prop to moviecard component
	const fetchData = async (searchString) => {
		const res = await axios.get(`${API_URL}&s=${searchString}`);
		const data = res.data;
		setMovieIDs(data.Search);
	};

	// Uses the value of input as an argument to search for movies from the omdbapi
	// Debounces every 6ms to make sure the API isn't being called repeatedly
	const onUserInput = (event) => {
		clearTimeout(timeoutId);
		setSearchValue(event.target.value);
		const timeout = setTimeout(() => fetchData(event.target.value), 600);
		setTimeoutId(timeout);
	};

	return (
		<div className="px-12 flex-1 flex flex-col border-2 border-slate-500">
			<div className="flex">
				<input
					type="text"
					className="-mt-5 z-10 grow rounded-md px-6 py-2 border-slate-300 border-2 outline-none"
					placeholder="Search for a movie"
					value={searchValue}
					onChange={onUserInput}
				/>
			</div>
			{movieIDs?.length > 0 ? (
				<>
					{movieIDs.map((movie, i) => (
						<Moviecard
							movie={movie}
							key={i}
						/>
					))}
				</>
			) : searchValue.trim().length !== 0 ? (
				<div className="flex justify-center items-center font-bold text-lg text-neutral-400/50 flex-1 border-2 border-slate-500">
					<h2>No matching results.</h2>
				</div>
			) : (
				<div className="flex justify-center items-center font-bold text-lg text-neutral-400/50 flex-1 border-2 border-slate-500">
					<h2>Start exploring</h2>
				</div>
			)}
		</div>
	);
}

export default Home;
