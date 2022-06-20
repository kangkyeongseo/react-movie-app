import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, summary, cover, rating, genres }) {
  return (
    <li>
      <Link to={`/movie/${id}`}>
        <h3>{title}</h3>
        <img src={cover} alt={title} />
        <div>
          <p>{summary}</p>
          <span>{rating}</span>
          <ul>
            {genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      </Link>
    </li>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
