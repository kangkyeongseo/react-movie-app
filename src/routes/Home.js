import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "../style/Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  console.log(movies);
  useEffect(() => {
    getMovies();
  }, []);
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
      <ul className={styles.movies}>
        {movies.map((movie) => {
          return (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              summary={movie.summary}
              cover={movie.medium_cover_image}
              rating={movie.rating}
              genres={movie.genres}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
