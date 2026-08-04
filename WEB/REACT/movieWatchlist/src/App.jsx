import { useState } from "react";
import Container from "react-bootstrap/Container";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";


const initialMovies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", watched: true },
  { id: 2, title: "Parasite", genre: "Thriller", watched: true },
  { id: 3, title: "Spiderman", genre: "Comedy", watched: false },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", watched: false },
  { id: 5, title: "Spirited Away", genre: "Animation", watched: true },
  { id: 6, title: "The Dark Knight", genre: "Action", watched: false },
];


function App() {
  const [movies, setMovies] = useState(initialMovies);

  const handleAddMovie = ({ title, genre }) => {
    const newMovie = {
      id: Date.now(),
      title,
      genre,
      watched: false,
    };
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const handleToggleWatched = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  };

  return (
    <Container className="py-4">
      <h1 className="mb-1 text-black">My Movie Watchlist</h1>
      <p className="text-muted mb-4">Add movies you want to watch, and mark them off once you're done.</p>

      <MovieForm onAddMovie={handleAddMovie} />
      <MovieList movies={movies} onToggleWatched={handleToggleWatched} />
    </Container>
  );
}

export default App;