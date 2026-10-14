import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../../components/movie-info";
import MovieProviders from "../../../../../components/movie-providers";

export async function generateMetadata({ params }) {
  const { id }: { id: string } = await params;
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieProvidersPage({ params }) {
  const { id }: { id: string } = await params;

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", margin: "20px 5%" }}>
        Movie Providers
      </h2>
      <Suspense fallback={<h1>Loading movie providers</h1>}>
        <MovieProviders id={id} />
      </Suspense>
    </div>
  );
}
