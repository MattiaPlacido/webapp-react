import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const initialFormData = { name: "", vote: 0, text: "" };

export default function FormReviewButton({ movieId }) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    fetch("http://localhost:3000/movies/addreview" + movieId, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        vote: formData.vote,
        text: formData.text,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        data
          ? console.log("Recensione inviata con successo!")
          : console.log("Si è verificato qualche errore");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log(movieId);
    setFormData(initialFormData);
    setShow(false);
  };

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        Lascia una recensione
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi la tua recensione!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Il tuo nome"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formVote">
              <Form.Label>Voto</Form.Label>
              <Form.Control
                as="select"
                name="vote"
                value={formData.vote}
                onChange={handleInputChange}
                required
              >
                <option value="">Scegli un voto da 1 a 5</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formText">
              <Form.Label>Contenuto</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Lascia il tuo pensiero"
                name="text"
                value={formData.text}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <div className="d-flex justify-content-center mt-3">
              <Button variant="dark" type="submit">
                Invia recensione
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
