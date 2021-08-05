import React from "react";
import "./MovieDetail.css";

const poster_url = `https://www.themoviedb.org/t/p/original/`;

class MovieDetail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const {location} = this.props;
        console.log(location.state)
        if(location.state){
            return (
                <div className="movie_detail">
                    <div className="header">
                        <img src={poster_url+location.state.backdrop} alt={location.state.title} title={location.state.title} className="movie__image" />
                    </div>
                    <div className="movie__data">
                        <h3 className="movie__title">{location.state.title}</h3>
                        <h5 className="movie__year">{location.state.year}</h5>
                    </div>
                </div>
            );
        }
        else {
            return null;
        }
    }
}

export default MovieDetail;