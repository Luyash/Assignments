import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

// Displays a single movie. Reused repeatedly inside MovieList.
function MovieCard({ movie, onToggleWatched }) {
  return (
    <Card
      className="h-100 shadow-sm"
      bg={movie.watched ? "light" : undefined}
      border={movie.watched ? "success" : "secondary"}
    >
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start">
          <Card.Title className={movie.watched ? "text-muted text-decoration-line-through" : ""}>
            {movie.title}
          </Card.Title>
          <Badge bg={movie.watched ? "success" : "warning"} text={movie.watched ? undefined : "dark"}>
            {movie.watched ? "Watched" : "Plan to Watch"}
          </Badge>
        </div>
        <Card.Subtitle className="mb-2 text-muted">{movie.genre}</Card.Subtitle>
        <Button
          size="sm"
          variant={movie.watched ? "outline-secondary" : "outline-success"}
          onClick={() => onToggleWatched(movie.id)}
        >
          Mark as {movie.watched ? "Not Watched" : "Watched"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;