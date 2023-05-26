import { HashRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/RecipeList";
import MyPage from "./components/MyPage";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<SearchBar />}
				/>
				<Route
					path='/search/:query'
					element={<SearchResult />}
				/>
				<Route
					path='/my-page'
					element={<MyPage />}
				/>
			</Routes>
		</Router>
	);
};

export default App;
