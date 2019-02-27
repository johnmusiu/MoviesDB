import React from "react";
import PropTypes from "prop-types";

const Movie = ({ movie }) => (
  <div id={movie.id}>
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
