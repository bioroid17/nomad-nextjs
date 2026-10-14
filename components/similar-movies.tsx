import { API_URL } from "../app/constant";
import styles from "../styles/similar-movies.module.css";
import Movie from "./movie";

async function getSimilarMovies(id: string) {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
}

export default async function SimilarMovies({ id }: { id: string }) {
  const similarMovies = await getSimilarMovies(id);
  return (
    <div className={styles.container}>
      {similarMovies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          id={movie.id}
        />
      ))}
    </div>
  );
}
