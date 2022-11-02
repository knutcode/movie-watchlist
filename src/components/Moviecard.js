import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { API_URL } from '../pages/Home';

const Moviecard = (props) => {
	const [movieInfo, setMovieInfo] = useState('');
	const { imdbID } = props.movie;

	// Uses IMDb ID prop from App as an argument to fetch detailed API info each time an IMDb ID is fetched (10 times)
	useEffect(() => {
		axios.get(`${API_URL}&i=${imdbID}`).then((res) => setMovieInfo(res.data));
	}, [imdbID]);

	return (
		<div
			key={imdbID}
			className="flex gap-4 py-4 justify-center"
		>
			<div className="w-24 shrink-0 grow-0">
				<img
					src={movieInfo.Poster !== 'N/A' ? movieInfo.Poster : 'https://via.placeholder.com/400x650'}
					alt={movieInfo.Title}
					className="w-24"
				/>
			</div>
			<div className="flex flex-col gap-2 justify-center">
				<div className="flex gap-2 items-center">
					<h2 className="text-lg font-medium leading-5 truncate max-w-[20rem]">{movieInfo.Title}</h2>
					<p className="text-xs">{movieInfo.imdbRating}</p>
				</div>

				<div className="flex gap-6 text-xs">
					{movieInfo.Runtime !== 'N/A' ? <p>{movieInfo.Runtime}</p> : null}
					<p>{movieInfo.Genre}</p>
					<div className="flex">
						<button>+</button>
						<p>Watchlist</p>
					</div>
				</div>

				<div className="flex text-neutral-500 text-sm max-w-[25rem]">
					<p className="line-clamp-3">{movieInfo.Plot}</p>
				</div>
			</div>
		</div>
	);
};

export default Moviecard;
