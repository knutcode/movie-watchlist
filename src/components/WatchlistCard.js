import { AiFillStar } from 'react-icons/ai';

const WatchlistCard = (props) => {
	const removeFromLs = () => {
		localStorage.removeItem(`${props.movie.Title}`);
	};

	return (
		<div className="flex gap-4 py-6 justify-center max-[500px]:flex-col max-[500px]:items-center">
			<div className="w-24 shrink-0 grow-0 max-[500px]:w-36">
				<img
					src={props.movie.Poster !== 'N/A' ? props.movie.Poster : 'https://via.placeholder.com/400x600'}
					alt={props.movie.Title}
					className="w-24 max-[500px]:w-36"
				/>
			</div>
			<div className="flex flex-col gap-2 justify-center max-[500px]:items-center max-w-[352px]">
				<div className="flex gap-2 items-center">
					<h2 className="text-lg font-medium truncate max-w-[20rem] max-[500px]:max-w-[18rem]">{props.movie.Title}</h2>
					<p className="text-xs flex items-center gap-1">
						<AiFillStar className="text-amber-300" /> {props.movie.imdbRating}
					</p>
				</div>

				<div className="flex items-center gap-5 text-xs">
					{props.movie.Runtime !== 'N/A' ? <p>{props.movie.Runtime}</p> : null}
					<p className="truncate max-w-[10rem]">{props.movie.Genre}</p>
					<div
						className="flex items-center cursor-pointer"
						onClick={removeFromLs}
					>
						<button>-</button>
						<p>Watchlist</p>
					</div>
				</div>

				<div className="flex text-neutral-500 text-sm w-[22rem] max-[500px]:text-center max-[500px]:items-center max-[500px]:w-[20rem]">
					<p className="line-clamp-3">{props.movie.Plot}</p>
				</div>
			</div>
		</div>
	);
};

export default WatchlistCard;
