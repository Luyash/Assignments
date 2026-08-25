import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieCard from "./MovieCard";


function MovieList({ movies, onToggleWatched }) {
  if (movies.length === 0) {
    return <p className="text-center text-muted mt-4">No movies yet — add one above!</p>;
  }

  return (
    <Row className="g-3 mt-2">
      {movies.map((movie) => (
        <Col key={movie.id} xs={12} sm={6} md={4}>
          <MovieCard movie={movie} onToggleWatched={onToggleWatched} />
        </Col>
      ))}
    </Row>
  );
}

export default MovieList;