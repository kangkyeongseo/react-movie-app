function Movie({ id, title, summary, cover, rating, genres }) {
  return (
    <li>
      <h3>{title}</h3>
      <img src={cover} alt={title} />
      <div>
        <p>{summary}</p>
        <span>{rating}</span>
        <ul>
          {genres.map((genre) => (
            <li>{genre}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default Movie;
