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
		<div key={imdbID}>
			<>
				<div>
					<img
						src={movieInfo.Poster !== 'N/A' ? movieInfo.Poster : 'https://via.placeholder.com/400'}
						alt={movieInfo.Title}
					/>
				</div>
				<div>
					<h2>{movieInfo.Title}</h2>
					<p>{movieInfo.imdbRating}</p>
				</div>

				<div>
					<p>{movieInfo.Runtime}</p>
					<p>{movieInfo.Genre}</p>
					<button>+</button>
					<p>Watchlist</p>
				</div>

				<div>
					<span>{movieInfo.Plot}</span>
				</div>
			</>
		</div>
	);
};

export default Moviecard;
