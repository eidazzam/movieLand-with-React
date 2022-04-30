import React, { useEffect, useState } from "react";
import Cardmovie from "./Cardmovie";
import "../App.css";
// import searchIcon from './search.svg'
import SearchIcon from "./search.svg";
import Spinner from "./Spinner";

const API_URL = "http://www.omdbapi.com?apikey=21b1addc ";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);



  const searchMovies = async (title) => {
    setLoading(true);
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json(); //data is an object

    setMovies(data.Search);
    setLoading(false);


  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    searchMovies("Batman");
  }, []);
  const searchMovie = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="app">
      {loading ? (
        <Spinner />
      ) : (
        <>
          {" "}
          <h1>MovieLand</h1>
          <div className="search">
            <input
              type="text"
              placeholder="Search for a movie"
              onChange={searchMovie}
            />
            <img
              src={SearchIcon}
              alt="search icon"
              onClick={() => searchMovies(searchTerm)}
            />
          </div>
          {movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
                <Cardmovie  key={movie.imdbID}movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2> No movies found</h2>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
