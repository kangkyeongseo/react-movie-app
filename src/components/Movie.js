import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../style/Movie.module.css";

function Movie({ id, title, summary, cover, rating, genres }) {
  return (
    <li className={styles.movie}>
      <Link to={`/movie/${id}`} className={styles.container}>
        <img src={cover} alt={title} className={styles.img} />
        <div>
          <h3 className={styles.title}>
            {title.length < 45 ? title : `${title.slice(0, 45)}...`}
          </h3>
          <p className={styles.summary}>
            {summary.length < 600 ? summary : `${summary.slice(0, 600)}...`}
          </p>
          <span className={styles.rating}>Rating : {rating} / 10</span>
          <ul className={styles.genres}>
            {genres.map((genre) => (
              <li key={genre} className={styles.genre}>
                {genre}
              </li>
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
