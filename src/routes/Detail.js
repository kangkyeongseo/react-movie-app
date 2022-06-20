import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      {loading ? <h1>Loading</h1> : null}
      {loading ? null : (
        <div>
          <img src={movie.medium_cover_image} />
          <div>
            <div>
              <h3>{movie.title}</h3>
              <span>{movie.year}</span>
            </div>
            <div>
              <span>Rating : {movie.rating} / 10</span>
              <span>Runtime : {movie.runtime}min</span>
            </div>
            <ul>
              {movie.genres?.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
