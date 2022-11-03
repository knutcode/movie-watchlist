import { useEffect, useState } from 'react';
import WatchlistCard from '../components/WatchlistCard';

const Watchlist = () => {
	const lol = [];

	const fetchLs = () => {
		for (let i = 0, len = localStorage.length; i < len; ++i) {
			lol.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
		}
	};

	for (let i = 0, len = localStorage.length; i < len; ++i) {
		JSON.parse(localStorage.getItem(localStorage.key(i)));
	}
	fetchLs();

	return (
		<div className="px-12 flex-1 flex flex-col">
			{localStorage.length > 0 ? (
				<>
					{lol.map((movie, i) => (
						<WatchlistCard
							movie={movie}
							key={i}
						/>
					))}
				</>
			) : (
				<div className="flex justify-center items-center font-bold text-lg text-[#DFDDDD] flex-1 border-2 border-slate-500">
					<h2 className="w-90 text-center">Your watchlist is looking a little empty...</h2>
				</div>
			)}
		</div>
	);
};

export default Watchlist;
