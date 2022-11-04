import { NavLink, Outlet, Route, Routes } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<nav className="max-[500px]:flex-col max-[500px]:justify-center md:justify-center md:gap-72 flex shrink-0 px-12 bg-[center_-9.8rem] sm:bg-[center_-16rem] bg-cover h-48 justify-between items-center">
				<Routes>
					<Route
						path="/"
						element={<h1 className="text-white text-4xl font-extrabold">Find your film</h1>}
					/>
					<Route
						path="/watchlist"
						element={<h1 className="text-white text-4xl font-extrabold">My Watchlist</h1>}
					/>
				</Routes>

				<NavLink
					end
					to="/"
					className="text-white text-sm font-bold pt-1"
				>
					Search for movies
				</NavLink>
				<NavLink
					to="/watchlist"
					className="text-white text-sm font-bold pt-1"
				>
					My Watchlist
				</NavLink>
			</nav>
			<Outlet />
		</>
	);
};

export default Navbar;
