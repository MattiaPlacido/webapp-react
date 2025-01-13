import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";

export default function MovieShowPage() {
  const [filmDetails, setFilmDetails] = useState();
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:3000/movies/" + id)
      .then((res) => res.json())
      .then((data) => {
        setFilmDetails(data);
        setLoading(false);
      });
  }, []);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="d-flex flex-column align-items-center py-4">
        <img src={filmDetails.image} alt={`${filmDetails.title} Poster`} />
        <p className="">
          Titolo : <b className="fs-4">{filmDetails.title}</b>
        </p>
        <p className="">
          Direttore : <b className="fs-4">{filmDetails.director}</b>
        </p>
        <p className="">
          Genere : <b className="fs-4">{filmDetails.genre}</b>
        </p>
        <p className="">
          Anno di uscita : <b className="fs-4">{filmDetails.release_year}</b>
        </p>
        <p className="">
          Riassunto (eng) : <b className="fs-4">{filmDetails.abstract}</b>
        </p>
        <hr className="w-100"></hr>
        <div className="">
          <p className="fs-4 text-center">Recensioni </p>
          <div className="d-flex justify-content-around">
            {filmDetails.reviews.map((review) => {
              return (
                <Card className="col-3 bg-black text-white">
                  <Card.Body>
                    <Card.Title className="pb-4">{review.name}</Card.Title>
                    <Card.Text>{review.text}</Card.Text>
                    <Card.Text>{convertVoteInStars(review.vote)}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
