import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";
import { fetchAsyncShows } from "../../features/movies/movieSlice";

const Home = () => {
	const dispatch = useDispatch();
	const movieText = "Spider";
	const showText = "Friends";
	useEffect(() => {
		dispatch(fetchAsyncMovies(movieText));
		dispatch(fetchAsyncShows(showText));
	}, [dispatch]);
	return (
		<div className="banner-img">
			<MovieListing />
		</div>
	);
};

export default Home;
