import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";

const Movie = ({ movie }) => (
  <div id={movie.id}>
    <Link to={`/${movie.id}`}>
      <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
    </Link>
    <h3>{movie.title}</h3>
    <p>{movie.overview} </p>
  </div>
);

export default Movie;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string
  }).isRequired
};
