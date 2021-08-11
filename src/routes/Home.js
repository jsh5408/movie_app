import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";
import MainImage from "../components/MainImage";
import TVList from "../components/TVList/TVList";
import "./Home.css";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const movie_url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&region=KR`;
const genres_url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=ko-KR&region=KR`;
const now_playing_url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR&region=KR`;
const tv_url = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=ko-KR&region=KR`;

//class Home extends React.Component {
const Home = () => {
  const [movies, setMovies] = useState();
  const [genres, setGenres] = useState();
  const [nowPlayingMovies, setNowPlayingMovies] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [main, setMain] = useState();
  const [tv, setTV] = useState();

  useEffect(() => {
    const getMovies = async () => {
      try{
        const responseMovies = await axios.get(movie_url);
        const responseGenres = await axios.get(genres_url);
        const responseNowPlayingMovies = await axios.get(now_playing_url);
        const responseTV = await axios.get(tv_url);
        setMovies(responseMovies.data.results);
        setGenres(responseGenres.data.genres);
        setNowPlayingMovies(responseNowPlayingMovies.data.results);
        setTV(responseTV.data.results);
        setMain(movies[0]);
      }
      catch(e) {

      }
      setIsLoading(false);
    };
    getMovies();
  }, []);

  return (
    <section className="container">
      {isLoading
        ? (<div className="loader">
          <span className="loader__text">Loading...</span>
        </div>)
        : (
          <div className="main_home">
            {movies && (
              <MainImage
                image={movies[0].backdrop_path}
                title={movies[0].title}
                text={movies[0].overview}
              />
            )}
            {movies && (
              <MovieList results={movies} genres={genres} name="인기 순위"/>
            )}
            {nowPlayingMovies && (
              <MovieList results={nowPlayingMovies} genres={genres} name="현재 상영작"/>
            )}
            {tv && (
              <TVList results={tv} genres={genres} name="TV 인기 순위"/>
            )}
          </div>
        )
      }
    </section>
  );
}


export default Home;
