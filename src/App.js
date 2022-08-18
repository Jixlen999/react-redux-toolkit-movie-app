import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Layout from "./components/Layout/Layout";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					{/* path="/react-redux-toolkit-movie-app/" is used to make it possible using gh-pages correctly */}
					<Route
						path="/react-redux-toolkit-movie-app/"
						element={<Layout />}
					>
						<Route index element={<Home />} />
						<Route
							path="/react-redux-toolkit-movie-app//movie/:imdbID"
							element={<MovieDetail />}
						/>
						<Route path="*" element={<PageNotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
