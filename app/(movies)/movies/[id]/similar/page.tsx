import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../../components/movie-info";
import SimilarMovies from "../../../../../components/similar-movies";

export async function generateMetadata({ params }) {
  const { id }: { id: string } = await params;
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function SimilarMoviesPage({ params }) {
  const { id }: { id: string } = await params;

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", margin: "20px 5%" }}>
        Similar Movies
      </h2>
      <Suspense fallback={<h1>Loading similar movies</h1>}>
        <SimilarMovies id={id} />
      </Suspense>
    </div>
  );
}
