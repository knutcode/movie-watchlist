import axios from 'axios';
import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { API_URL } from '../pages/Home';
import { AiFillStar, AiFillPlusCircle } from 'react-icons/ai';
import { GlobalContext } from '../context/GlobalState';

const Moviecard = (props) => {
	const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);
	const { imdbID } = props.movie;
	const [movie, setMovie] = useState('');

	// Uses IMDb ID prop from App as an argument to fetch detailed API info each time an IMDb ID is fetched (10 times)
	useEffect(() => {
		axios.get(`${API_URL}&i=${imdbID}`).then((res) => setMovie(res.data));
	}, [imdbID]);

	let storedMovie = watchlist.find((obj) => obj.imdbID === movie.imdbID);

	const watchlistDisabled = storedMovie ? true : false;

	return (
		<div
			key={imdbID}
			className="flex gap-4 py-6 justify-center max-[500px]:flex-col max-[500px]:items-center"
		>
			<div className="w-24 shrink-0 grow-0 max-[500px]:w-36">
				<img
					src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400x600'}
					alt={movie.Title}
					className="w-24 max-[500px]:w-36"
				/>
			</div>
			<div className="flex flex-col gap-2 justify-center max-[500px]:items-center max-w-[352px]">
				<div className="flex gap-2 items-center">
					<h2 className="text-lg font-medium truncate max-w-[20rem] max-[500px]:max-w-[18rem]">{movie.Title}</h2>
					<p className="text-xs flex items-center gap-1">
						<AiFillStar className="text-amber-300" /> {movie.imdbRating}
					</p>
				</div>

				<div className="flex items-center gap-5 text-xs">
					{movie.Runtime !== 'N/A' ? <p>{movie.Runtime}</p> : null}
					<p className="truncate max-w-[10rem]">{movie.Genre}</p>

					<button
						className="disabled:opacity-25 flex gap-1 items-center cursor-pointer"
						onClick={() => addMovieToWatchlist(movie)}
						disabled={watchlistDisabled}
					>
						<AiFillPlusCircle className="text-base" /> Watchlist
					</button>
				</div>

				<div className="flex text-neutral-500 text-sm w-[22rem] max-[500px]:text-center max-[500px]:items-center max-[500px]:w-[20rem]">
					<p className="line-clamp-3">{movie.Plot}</p>
				</div>
			</div>
		</div>
	);
};

export default Moviecard;
