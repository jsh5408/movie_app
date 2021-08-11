import React, {useState, useEffect} from "react";
import "./TVDetail.css";
import useReactRouter from "use-react-router";
import axios from "axios";
import TVList from "../TVList";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const poster_url = `https://www.themoviedb.org/t/p/original/`;
const movie_url = `https://api.themoviedb.org/3/tv/`
const similar_url = `/similar?api_key=${API_KEY}&language=ko-KR`

const TVDetail = (props) => {
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
                        <TVList results={movies} name="비슷한 작품"/>
                    }
                </div>
            </section>
        );
        }
    else {
        return null;
    }
}

export default TVDetail;