import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard";
import FormReviewButton from "../../components/FormReviewButton";
import ReviewList from "../../components/ReviewList";

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
      <div className="pt-3">
        <MovieCard
          image={filmDetails.image}
          title={filmDetails.title}
          director={filmDetails.director}
          genre={filmDetails.genre}
          release_year={filmDetails.release_year}
          abstract={filmDetails.abstract}
          key={id}
        />
        <hr className=""></hr>
        <div className="">
          <div className="d-flex flex-column align-items-center my-4">
            <p className="fs-4 text-center">Recensioni </p>
            <FormReviewButton movieId={id} />
            <ReviewList reviews={filmDetails.reviews} />
          </div>
        </div>
      </div>
    </>
  );
}
