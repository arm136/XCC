import React, { useState} from "react";
import { Form, Col, Row, Modal } from "react-bootstrap";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function TeamsForm() {
  const [data, setData] = useState({
    id: " ",
    image: " ",
    name: " ",
    title: " ",
    email: " ",
    mobile: " ",
    linkdin: " "
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("id", data.id);
    formdata.append("image", data.image);
    formdata.append("name", data.name);
    formdata.append("title", data.title);
    formdata.append("email", data.email);
    formdata.append("mobile", data.mobile);
    formdata.append("linkdin", data.linkdin);

    // Perform form submission logic here

    // Assuming successful form submission
    setShowSuccessModal(true);

    axios
      .post("http://localhost:8081/addteams", formdata)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };


   

  const navigate = useNavigate();

  const handleCloseSuccessModal = () => {
    navigate("/adminteams");
    setShowSuccessModal(false);
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };

  return (
    <Form onSubmit={handleSubmit} className="border p-3">

    <Form.Group as={Row} controlId="id" className="mt-3">
      <Form.Label column sm={2} className="fw-bold fs-6">ID:</Form.Label>
      <Col sm={12}>
        <Form.Control
          type="text"
          required
          onChange={(event) => setData({...data, id: event.target.value})}
        />
      </Col>
    </Form.Group>

    <Form.Group as={Row} controlId="image" className="mt-3">
      <Form.Label column sm={2} className="fw-bold fs-6">Image:</Form.Label>
      <Col sm={12}>
        <Form.Control
          type="file"
          required
          onChange={(event) => setData({...data, image: event.target.files[0]})}
        />
      </Col>
    </Form.Group>

    <Form.Group as={Row} controlId="name" className="mt-3">
      <Form.Label column sm={2} className="fw-bold fs-6">Name:</Form.Label>
      <Col sm={12}>
        <Form.Control
          type="text"
          required
          onChange={(event) => setData({...data, name: event.target.value})}
        />
      </Col>
    </Form.Group>

    <Form.Group as={Row} controlId="title" className="mt-3">
      <Form.Label column sm={2} className="fw-bold fs-6">Title:</Form.Label>
      <Col sm={12}>
        <Form.Control
          type="text"
          required
          onChange={(event) => setData({...data, title: event.target.value})}
        />
      </Col>
    </Form.Group>

    <Form.Group as={Row} controlId="email" className="mt-3">
      <Form.Label column sm={2} className="fw-bold fs-6">Email:</Form.Label>
      <Col sm={12}>
        <Form.Control
          type="email"
          required
          onChange={(event) => setData({...data, email: event.target.value})}
        />
      </Col>
    </Form.Group>

    <Form.Group as={Row} controlId="mobile" className="mt-3">
      <Form.Label column sm={2} className="fw-bold fs-6">Mobile_Number:</Form.Label>
      <Col sm={12}>
        <Form.Control
          type="text"
          required
          onChange={(event) => setData({...data, mobile: event.target.value})}
        />
      </Col>
    </Form.Group>

    <Form.Group as={Row} controlId="linkdin" className="mt-3">
      <Form.Label column sm={2} className="fw-bold fs-6">Linkdin:</Form.Label>
      <Col sm={12}>
        <Form.Control
          type="text"
          required
          onChange={(event) => setData({...data, linkdin: event.target.value})}
        />
      </Col>
    </Form.Group>
    
    {/* Success Modal */}
    <Modal
        show={showSuccessModal}
        onHide={handleCloseSuccessModal}
        centered // Added centered prop to show the modal in the center
      >
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Form submitted successfully!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseSuccessModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Error Modal */}
      <Modal
        show={showErrorModal}
        onHide={handleCloseErrorModal}
        centered // Added centered prop to show the modal in the center
      >
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Error submitting the form. Please try again.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseErrorModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

    <Form.Group as={Row} controlId="submit" className="mt-3">
      <Col sm={{ span: 10, offset: 2 }}>
        <Button variant="primary" type="submit">Submit</Button>
      </Col>
    </Form.Group>

  </Form>
  );
}

export default TeamsForm;
