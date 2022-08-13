import React from "react";

const MovieCard = (props) => {
	const { data } = props;
	return (
		<div className="card-item">
			<div className="card-inner">
				<div className="card-top">
					<img src={data.Poster} />
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
