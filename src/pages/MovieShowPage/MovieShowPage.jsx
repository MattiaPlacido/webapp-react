import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReviewCard from "../../components/ReviewCard";
import MovieCard from "../../components/MovieCard";

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
      <div className="mx-auto py-4">
        <MovieCard
          image={filmDetails.image}
          title={filmDetails.title}
          director={filmDetails.director}
          genre={filmDetails.genre}
          release_year={filmDetails.release_year}
          abstract={filmDetails.abstract}
          key={id}
        />
        <hr className="w-100"></hr>
        <div className="">
          <p className="fs-4 text-center">Recensioni </p>
          <div className="d-flex justify-content-around">
            {filmDetails.reviews.map((review, index) => {
              return (
                <ReviewCard
                  name={review.name}
                  vote={review.vote}
                  text={review.text}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
