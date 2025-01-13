import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";

function convertVoteInStars(vote) {
  if (vote > 5) {
    return "il voto deve essere da 1 a 5";
  } else {
    const stars = [];

    for (let i = 0; i < vote; i++) {
      stars.push(<FontAwesomeIcon icon={faStarSolid} />);
    }
    for (let i = vote; i < 5; i++) {
      stars.push(<FontAwesomeIcon icon={faStarRegular} />);
    }
    return stars;
  }
}

export default function ReviewCard({ name, text, vote }) {
  return (
    <Card className="col-3 bg-black text-white">
      <Card.Body>
        <Card.Title className="pb-4">{name}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Card.Text>{convertVoteInStars(vote)}</Card.Text>
      </Card.Body>
    </Card>
  );
}
