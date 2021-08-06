import React from 'react';
import "./MainImage.css";

const poster_url = `https://www.themoviedb.org/t/p/original/`;

function MainImage(props) {
  return (
    <div className="main__image"
        style={{ backgroundImage: `url(${poster_url+props.image})` }}
    >
        <div className="description">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    </div>
  );
}

export default MainImage;