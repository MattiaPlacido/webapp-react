import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReviewCard from "../components/ReviewCard";

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
                <ReviewCard
                  name={review.name}
                  vote={review.vote}
                  text={review.text}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
