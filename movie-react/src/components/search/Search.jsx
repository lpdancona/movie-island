import React, { useEffect, useState } from "react";
import axios from "axios";
import "./search.scss";
import MovieCard from "../movie-card/MovieCard";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
function Search() {
  const API_URL = "https://api.themoviedb.org/3";
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const fetchMovies = async () => {
    const type = searchKey.length > 1 ? "search" : "discover";
    const URL = `${API_URL}/search/movie`;
    console.log(URL);
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: "c04163a5495021643b41e14ae4abe5bf",
        query: searchKey,
      },
    });
    setMovies(results);
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  console.log(searchKey.lenght);
  const renderMovies = () => {
    movies.map((movie) => {
      <MovieCard key={movie.id} movie={movie} />;
    });
  };

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  return (
    <div>
      <Navbar />
      <div className="search">
        <header>
          <h1>Find a Movie</h1>

          <form onSubmit={searchMovies}>
            <input
              type="text"
              onChange={(e) => setSearchKey(e.target.value)}
              placeholder="Search for a movie"
            />
            <button type={"submit"}>Search</button>
          </form>
        </header>
        <div className="container-search">
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Search;
