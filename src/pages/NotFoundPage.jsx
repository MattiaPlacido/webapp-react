import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="text-center d-flex align-items-center flex-column">
      <p className="h1 fs-4">404 Not Found</p>
      <Link to="/movies" className="fs-6 text-secondary mt-3">
        Clicca qua per tornare alla home
      </Link>
    </div>
  );
}
