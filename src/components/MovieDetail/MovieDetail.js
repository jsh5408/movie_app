import React, {useState, useEffect} from "react";
import "./MovieDetail.css";
import useReactRouter from "use-react-router";
import axios from "axios";
import MovieList from "../MovieList";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const poster_url = `https://www.themoviedb.org/t/p/original/`;
const movie_url = `https://api.themoviedb.org/3/movie/`
const similar_url = `/similar?api_key=${API_KEY}&language=ko-KR`

/* 
<div className="header__image"
    style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0),  rgba(255, 255, 255, 1)),
    url(${poster_url+location.state.backdrop})`,
    height: '500px',
    backgroundSize: '100%,cover',
    backgroundPosition: 'center,center',
    width: '100%',
    position: 'relative',
    }}
>
*/

//class MovieDetail extends React.Component {
const MovieDetail = (props) => {
    const [movies, setMovies] = useState();
    if(props.location.state === undefined) {
        props.history.push("/");
    }
    useEffect(() => {
        const getMovies = async () => {
            try{
              const responseMovies = await axios.get(movie_url+props.location.state.id+similar_url);
              setMovies(responseMovies.data.results);
            }
            catch(e) {
      
            }
          };
          getMovies();
    }, []);

    if(props.location.state){
        return (
            <section className="detail__container">
                <div className="movie__detail">
                    <div className="header__image"
                        style={{ backgroundImage: `url(${poster_url+props.location.state.backdrop})` }}
                    >
                    </div>
                    <div className="movie__data">
                        <div className="movie__info">
                            <img src={poster_url+props.location.state.poster} alt={props.location.state.title} title={props.location.state.title} />
                            <div className="movie__info__description">
                                <h3 className="movie__title">{props.location.state.title}</h3>
                                <h5 className="movie__year">{props.location.state.year}</h5>
                                <h5>장르 . 국가</h5>
                                <h5>{props.location.state.summary}</h5>
                            </div>
                        </div>
                    </div>
                    {movies &&
                        <MovieList results={movies} name="비슷한 작품"/>
                    }
                </div>
            </section>
        );
        }
    else {
        return null;
    }
}

export default MovieDetail;