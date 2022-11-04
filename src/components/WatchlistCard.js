import { AiFillStar, AiFillMinusCircle } from 'react-icons/ai';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const WatchlistCard = (props) => {
	const { movie } = props;
	const { removeMovieFromWatchlist } = useContext(GlobalContext);

	return (
		<div className="flex gap-4 py-6 justify-center max-[500px]:flex-col max-[500px]:items-center">
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
						onClick={() => removeMovieFromWatchlist(movie.imdbID)}
						className="disabled:opacity-25 flex gap-1 items-center cursor-pointer"
					>
						<AiFillMinusCircle className="text-base" /> Watchlist
					</button>
				</div>

				<div className="flex text-neutral-500 text-sm w-[22rem] max-[500px]:text-center max-[500px]:items-center max-[500px]:w-[20rem]">
					<p className="line-clamp-3">{movie.Plot}</p>
				</div>
			</div>
		</div>
	);
};

export default WatchlistCard;
