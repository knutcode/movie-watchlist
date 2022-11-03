import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Watchlist from './pages/Watchlist';

function App() {
	return (
		<div className="flex flex-col items-stretch h-screen">
			{<Navbar />}
			<Routes>
				<Route
					exact
					path="/"
					element={<Home />}
				/>
				<Route
					path="/watchlist"
					element={<Watchlist />}
				/>
			</Routes>
		</div>
	);
}

export default App;
