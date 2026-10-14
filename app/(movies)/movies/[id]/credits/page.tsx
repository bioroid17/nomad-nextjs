import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../../components/movie-info";
import MovieCredits from "../../../../../components/movie-credits";

export async function generateMetadata({ params }) {
  const { id }: { id: string } = await params;
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieCreditsPage({ params }) {
  const { id }: { id: string } = await params;

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", margin: "20px 5%" }}>
        Movie Credits
      </h2>
      <Suspense fallback={<h1>Loading movie credits</h1>}>
        <MovieCredits id={id} />
      </Suspense>
    </div>
  );
}
