import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import styles from "./components.module.css";

export default function MoviePreviewCard({ image, title, content, id }) {
  return (
    <Card className={`col-3 border-black ${styles.movie_card_preview}`}>
      <Card.Img
        variant="top"
        src={"http://localhost:3000/public/" + image}
        alt={`${title} Poster`}
        className={`${styles.poster_image}`}
      />
      <Card.Body className="text-white bg-black">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Link
          className="text-decoration-none text-white fw-bold"
          to={"/movies/" + id}
        >
          Mostra dettagli
        </Link>
      </Card.Body>
    </Card>
  );
}
