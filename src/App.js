import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import { GlobalProvider } from './context/GlobalState';

function App() {
	return (
		<GlobalProvider>
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
		</GlobalProvider>
	);
}

export default App;
