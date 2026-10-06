export default async function MovieDetail({ params }) {
  const { id }: { id: string } = await params;
  return <h1>Movie {id}</h1>;
}
