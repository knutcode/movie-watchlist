import axios from 'axios';
import { useState } from 'react';
import Moviecard from '../components/Moviecard';
import { HiSearch } from 'react-icons/hi';
import { MdMovieFilter } from 'react-icons/md';

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
		<div className="px-12 flex-1 flex flex-col">
			<div className="flex justify-center mb-6 relative min-[612px]:w-[512px] min-[612px]:mx-auto">
				<HiSearch className="z-20 -mt-[12px] absolute left-3 text-2xl text-slate-400" />
				<input
					type="text"
					size="1"
					className="-mt-[22px] z-10 grow shrink rounded-md px-10 py-2 border-slate-300 border-2 outline-none max-w-[512px] text-slate-400 font-medium"
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
				<div className="flex justify-center items-center font-bold text-lg text-[#DFDDDD] flex-1 border-2 border-slate-500">
					<h2 className="w-80 text-center">Unable to find what you’re looking for. Please try another search.</h2>
				</div>
			) : (
				<div className="flex flex-col justify-center items-center font-bold text-lg text-[#DFDDDD] flex-1 border-2 border-slate-500">
					<MdMovieFilter className="text-8xl" />
					<h2>Start exploring</h2>
				</div>
			)}
		</div>
	);
}

export default Home;
