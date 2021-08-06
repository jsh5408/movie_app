import React from "react";
import "./MovieDetail.css";

const poster_url = `https://www.themoviedb.org/t/p/original/`;

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

class MovieDetail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }
    
    render() {
        const {location} = this.props;
        if(location.state){
            return (
                <section className="detail__container">
                    <div className="movie__detail">
                        <div className="header__image"
                            style={{ backgroundImage: `url(${poster_url+location.state.backdrop})` }}
                        >
                        </div>
                        <div className="movie__data">
                            <div className="movie__info">
                                <img src={poster_url+location.state.poster} alt={location.state.title} title={location.state.title} />
                                <div className="movie__info__description">
                                    <h3 className="movie__title">{location.state.title}</h3>
                                    <h5 className="movie__year">{location.state.year}</h5>
                                    <h5>장르 . 국가</h5>
                                    <h5>{location.state.summary}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
        else {
            return null;
        }
    }
}

export default MovieDetail;