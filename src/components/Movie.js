import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

const poster_url = `https://www.themoviedb.org/t/p/w220_and_h330_face/`;

function Movie({id, year, title, summary, poster}) {
    return (
        <Link to={{
            pathname: `movie/:id`,
            state: {
                year,
                title,
                summary,
                poster
            }
        }}>
            <div className="movie">
                <img src={poster_url+poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <p className="movie__summary">{summary.slice(0, 140)}...</p>
                </div>
            </div>
        </Link>
    );
}

Movie.prototypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;