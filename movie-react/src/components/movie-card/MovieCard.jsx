import React from "react";
import "./movieCard.scss";
const MovieCard = ({ movie }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="movie-card">
      {movie.poster_path ? (
        <img
          className={"movie-cover"}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
        />
      ) : null}
      <div className="search-info">
        <h5>{movie.title}</h5>
        <span>{movie.overview}</span>
      </div>
    </div>
  );
};

export default MovieCard;
