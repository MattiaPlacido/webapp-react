import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="text-center d-flex flex-column gap-3 mt-5">
      {movieList.map((movie) => {
        return (
          <Link
            className="text-decoration-none text-white"
            to={"/movies/" + movie.id}
          >
            {movie.title}
          </Link>
        );
      })}
    </div>
  );
}
