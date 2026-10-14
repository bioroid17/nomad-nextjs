import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-credits.module.css";

async function getMovieCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCredits({ id }: { id: string }) {
  const credits = await getMovieCredits(id);
  return (
    <div className={styles.container}>
      {credits.map((credit) => (
        <div key={credit.id}>
          <img src={credit.profile_path} alt={credit.name} />
          <h3>{credit.name}</h3>
          <h5>as {credit.character}</h5>
        </div>
      ))}
    </div>
  );
}
