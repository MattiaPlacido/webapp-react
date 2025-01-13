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
    <div className="bg-black border-light border d-flex w-75 mx-auto" key={key}>
      <img
        src={"http://localhost:3000/public/" + image}
        alt={`${title} Poster`}
        className={`${styles.poster_image}`}
      />
      <div className="p-3">
        <p>
          Titolo : <b className="fs-4">{title}</b>
        </p>
        <p>
          Direttore : <b className="fs-4">{director}</b>
        </p>
        <p>
          Genere : <b className="fs-4">{genre}</b>
        </p>
        <p>
          Anno di uscita : <b className="fs-4">{release_year}</b>
        </p>
        <p>
          Riassunto : <b className="fs-4">{abstract}</b>
        </p>
      </div>
    </div>
  );
}
