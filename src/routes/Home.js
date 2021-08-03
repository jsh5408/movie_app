import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`;

class Home extends React.Component {
  state = {
    isLoading: true,
    results: []
  };

  getMovies = async () => {
    const {
      data: {results}
    } = await axios.get(url);
    this.setState({results, isLoading: false})
  };

  componentDidMount() {
    this.getMovies();
  };

  render() {
    const { isLoading, results } = this.state;
    return (
      <section className="container">
        {isLoading
          ? (<div className="loader">
            <span className="loader__text">Loading...</span>
          </div>)
          : (<div className="movies">
            {results.map(movie => (
              <Movie
              key={movie.id}
              id={movie.id}
              year={movie.release_date}
              title={movie.title}
              summary={movie.overview}
              poster={movie.poster_path}
              />
            ))}
          </div>)
        }
      </section>
    );
  }
}


export default Home;
