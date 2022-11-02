import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Watchlist from './pages/Watchlist';

function App() {
	return (
		<div className="flex flex-col items-stretch h-screen">
			<Routes>
				<Route element={<Navbar />}>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/watchlist"
						element={<Watchlist />}
					/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
