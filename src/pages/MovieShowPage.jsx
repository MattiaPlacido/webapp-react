import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
    <div className="d-flex flex-column align-items-center py-4">
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
    </div>
  );
}
