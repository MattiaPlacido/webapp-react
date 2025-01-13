import { useParams } from "react-router-dom";

export default function MovieShowPage() {
  const { id } = useParams();
  return <p>{id}</p>;
}
