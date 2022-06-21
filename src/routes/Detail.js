import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../style/Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);
  return (
    <div>
      {loading ? (
        <div className={styles.loading}>
          <div className={styles.loading__wrapper}>
            <div className={styles.loading__circleleft}></div>
            <div className={styles.loading__circleright}></div>
          </div>
        </div>
      ) : null}
      {loading ? null : (
        <div>
          <div className={styles.background}></div>
          <img
            src={movie.background_image}
            className={styles.background__image}
          />
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <div className={styles.header}>
                <img src={movie.medium_cover_image} />
                <div className={styles.intro}>
                  <h3>{movie.title}</h3>
                  <span>{movie.year}</span>
                  <span>Rating : {movie.rating} / 10</span>
                  <span>Runtime : {movie.runtime}min</span>
                  <ul>
                    {movie.genres?.map((genre) => (
                      <li key={genre}>{genre}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p>{movie.description_full}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
