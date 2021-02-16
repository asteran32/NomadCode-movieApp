import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }){
    return (
        <div className="movie">
            <img src={poster} alt={title}></img>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                {/* We are doing that because sometimes genres is undefined.
                If you call .map on undefined you will get an error :) */}
                {genres && genres.map((genre, index) => (
                    <li key={index} className="genres__genre">
                    {genre}
                    </li>
                ))}
                </ul>
                <p className="movie__summary">{summary.slice(0, 240)}...</p>
            </div>
        </div>
    );
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
};

export default Movie;