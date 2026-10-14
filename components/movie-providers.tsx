import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-providers.module.css";

async function getMovieProviders(id: string) {
  const response = await fetch(`${API_URL}/${id}/providers`);
  return response.json();
}

export default async function MovieProviders({ id }: { id: string }) {
  const providers = await getMovieProviders(id);
  const koreanProviders = providers.KR;
  const link = koreanProviders?.link;
  const rentList = koreanProviders?.rent;
  const buyList = koreanProviders?.buy;

  return (
    <>
      {koreanProviders ? (
        <div className={styles.container}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            TMDB &rarr;
          </a>
          <section>
            <h3>Rent</h3>
            {rentList && rentList.length > 0 ? (
              <ul>
                {rentList.map((rent: any) => (
                  <li key={rent.provider_id}>
                    <img src={rent.logo_path} alt={rent.provider_name} />
                    <span>{rent.provider_name}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No rent options available.</p>
            )}
          </section>
          <section>
            <h3>Buy</h3>
            {buyList && buyList.length > 0 ? (
              <ul>
                {buyList.map((buy: any) => (
                  <li key={buy.provider_id}>
                    <img src={buy.logo_path} alt={buy.provider_name} />
                    <span>{buy.provider_name}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No buy options available.</p>
            )}
          </section>
        </div>
      ) : (
        <p className={styles.unavailable}>Providers not available.</p>
      )}
    </>
  );
}
