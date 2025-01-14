import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MoviePreviewCard from "../components/MoviePreviewCard";

export default function HomePage() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies/")
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data);
      });
  }, []);

  return (
    <div className="text-center d-flex gap-5 mt-5 justify-content-center">
      {movieList.map((movie) => {
        return (
          <MoviePreviewCard
            id={movie.id}
            title={movie.title}
            content={movie.abstract}
            image={movie.image}
          />
        );
      })}
    </div>
  );
}
