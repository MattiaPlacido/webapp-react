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

export default function ReviewCard({ name, text, vote, key }) {
  return (
    <Card
      className="col-2 bg-white border border-black border-3 rounded-1 text-black text-center m-3"
      key={key}
    >
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="p-3">{text}</Card.Text>
        <Card.Text>{convertVoteInStars(vote)}</Card.Text>
      </Card.Body>
    </Card>
  );
}
