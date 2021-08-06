import React from "react";
import axios from "axios";
import MovieList from "../components/MovieList";
import MainImage from "../components/MainImage";
import "./Home.css";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const movie_url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&region=KR`;
const genres_url = `https://api.themoviedb.org/3//genre/movie/list?api_key=${API_KEY}&language=ko-KR&region=KR`;

class Home extends React.Component {
  state = {
    isLoading: true,
    results: [],
    genres: []
  };

  getMovies = async () => {
    const {
      data: {results}
    } = await axios.get(movie_url);
    const {data: {genres}} = await axios.get(genres_url);
    this.setState({results, genres, isLoading: false})
  };

  componentDidMount() {
    this.getMovies();
  };

  render() {
    const { isLoading, results, genres } = this.state;
    const main = results[0];
    return (
      <section className="container">
        {isLoading
          ? (<div className="loader">
            <span className="loader__text">Loading...</span>
          </div>)
          : (
            <div className="main_home">
              {main && (
                <MainImage
                  image={main.backdrop_path}
                  title={main.title}
                  text={main.overview}
                />
              )}
              <MovieList results={results} genres={genres}/>
            </div>
          )
        }
      </section>
    );
  }
}


export default Home;
