import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { API_URL } from './App';

const MovieCard = (props) => {
	const [movieInfo, setMovieInfo] = useState('');
	const { imdbID } = props.movie;

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
					<p>Watchlist</p>
				</div>

				<div>
					<span>{movieInfo.Plot}</span>
				</div>
			</>
		</div>
	);
};

export default MovieCard;
