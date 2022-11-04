import WatchlistCard from '../components/WatchlistCard';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import { AiFillPlusCircle } from 'react-icons/ai';

const Watchlist = () => {
	const { watchlist } = useContext(GlobalContext);

	return (
		<div className="px-12 flex-1 flex flex-col">
			{watchlist.length > 0 ? (
				<>
					{watchlist.map((movie, i) => (
						<WatchlistCard
							movie={movie}
							key={i}
						/>
					))}
				</>
			) : (
				<div className="flex flex-col gap-4 justify-center items-center font-bold text-lg text-[#DFDDDD] flex-1">
					<h2 className="w-90 text-center">Your watchlist is looking a little empty...</h2>
					<Link
						to="/"
						className="flex items-center gap-1 text-[#363636]"
					>
						<AiFillPlusCircle />
						Lets add some movies!
					</Link>
				</div>
			)}
		</div>
	);
};

export default Watchlist;
