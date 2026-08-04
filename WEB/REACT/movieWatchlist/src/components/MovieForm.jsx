import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Controlled form used to add a new movie. Passes the new movie up to App.
function MovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      setError("Movie title can't be empty.");
      return;
    }

    onAddMovie({ title: title.trim(), genre: genre.trim() || "Uncategorized" });

    // clear inputs
    setTitle("");
    setGenre("");
    setError("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="g-2 align-items-start">
        <Col xs={12} sm={5}>
          <Form.Control
            type="text"
            placeholder="Movie title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (error) setError("");
            }}
            isInvalid={!!error}
          />
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        </Col>
        <Col xs={12} sm={4}>
          <Form.Control
            type="text"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </Col>
        <Col xs={12} sm={3}>
          <Button type="submit" variant="primary" className="w-100" disabled={title.trim() === ""}>
            Add Movie
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default MovieForm;