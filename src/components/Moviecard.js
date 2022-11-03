import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { API_URL } from '../pages/Home';
import { AiFillStar } from 'react-icons/ai';

const Moviecard = (props) => {
	const [movieInfo, setMovieInfo] = useState('');
	const { imdbID } = props.movie;

	// Uses IMDb ID prop from App as an argument to fetch detailed API info each time an IMDb ID is fetched (10 times)
	useEffect(() => {
		axios.get(`${API_URL}&i=${imdbID}`).then((res) => setMovieInfo(res.data));
	}, [imdbID]);

	const saveToLs = () => {
		localStorage.setItem(`${movieInfo.Title}`, JSON.stringify(movieInfo));
	};

	return (
		<div
			key={imdbID}
			className="flex gap-4 py-6 justify-center max-[500px]:flex-col max-[500px]:items-center"
		>
			<div className="w-24 shrink-0 grow-0 max-[500px]:w-36">
				<img
					src={movieInfo.Poster !== 'N/A' ? movieInfo.Poster : 'https://via.placeholder.com/400x600'}
					alt={movieInfo.Title}
					className="w-24 max-[500px]:w-36"
				/>
			</div>
			<div className="flex flex-col gap-2 justify-center max-[500px]:items-center max-w-[352px]">
				<div className="flex gap-2 items-center">
					<h2 className="text-lg font-medium truncate max-w-[20rem] max-[500px]:max-w-[18rem]">{movieInfo.Title}</h2>
					<p className="text-xs flex items-center gap-1">
						<AiFillStar className="text-amber-300" /> {movieInfo.imdbRating}
					</p>
				</div>

				<div className="flex items-center gap-5 text-xs">
					{movieInfo.Runtime !== 'N/A' ? <p>{movieInfo.Runtime}</p> : null}
					<p className="truncate max-w-[10rem]">{movieInfo.Genre}</p>
					<div
						className="flex items-center cursor-pointer"
						onClick={() => saveToLs(movieInfo)}
					>
						<button>+</button>
						<p>Watchlist</p>
					</div>
				</div>

				<div className="flex text-neutral-500 text-sm w-[22rem] max-[500px]:text-center max-[500px]:items-center max-[500px]:w-[20rem]">
					<p className="line-clamp-3">{movieInfo.Plot}</p>
				</div>
			</div>
		</div>
	);
};

export default Moviecard;
