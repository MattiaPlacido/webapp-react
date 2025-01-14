import styles from "./components.module.css";

export default function MovieCard({
  image,
  title,
  director,
  genre,
  release_year,
  abstract,
  key,
}) {
  return (
    <div
      className="bg-black border-light border d-flex w-75 mx-auto text-center"
      key={key}
    >
      <img
        src={"http://localhost:3000/public/" + image}
        alt={`${title} Poster`}
        className={`col-2 ${styles.poster_image}`}
      />
      <div className="p-3 col-10">
        <p>
          <b className="fs-4">{title}</b>
        </p>
        <p>
          <b className="fs-4">{director}</b>
        </p>
        <p>
          <b className="fs-4">{genre}</b>
        </p>
        <p>
          <b className="fs-4">{release_year}</b>
        </p>
        <p className="fs-5">{abstract}</p>
      </div>
    </div>
  );
}
