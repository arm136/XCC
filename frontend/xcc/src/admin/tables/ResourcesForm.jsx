import React, { useState, useEffect } from "react";
import { Form, Col, Row, Modal } from "react-bootstrap";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function ResourcesForm() {
  const [data, setData] = useState({
    id: " ",
    title: " ",
    file: " ",
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);


  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:8081/adminaddresources')
      .then(res => {
        if (res.data.Status === "Success") {
          if (res.data.role === "admin") {
            const id = res.data.id;
            navigate('/adminaddresources');
          }
        } else {
          navigate('/start')
          console.log('Access Denied!');
        }
      })
  }, [])

 

  const handleSubmit = (event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("id", data.id);
    formdata.append("title", data.title);
    formdata.append("file", data.file);

    // Perform form submission logic here

    // Assuming successful form submission
    setShowSuccessModal(true);

    // If submission fails
    // setShowErrorModal(true);

    axios
      .post("http://localhost:8081/addresources", formdata)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };


  const handleCloseSuccessModal = () => {
    navigate("/adminresources");
    setShowSuccessModal(false);
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };


  return (
    <Form onSubmit={handleSubmit} className="border p-3">
      <Form.Group as={Row} controlId="id" className="mt-3">
        <Form.Label column sm={2} className="fw-bold fs-6">
          ID:
        </Form.Label>
        <Col sm={12}>
          <Form.Control
            type="text"
            required
            onChange={(event) => setData({ ...data, id: event.target.value })}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="title" className="mt-3">
        <Form.Label column sm={2} className="fw-bold fs-6">
          Title:
        </Form.Label>
        <Col sm={12}>
          <Form.Control
            type="text"
            required
            onChange={(event) =>
              setData({ ...data, title: event.target.value })
            }
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="file" className="mt-3">
        <Form.Label column sm={2} className="fw-bold fs-6">
          Pdf:
        </Form.Label>
        <Col sm={12}>
          <Form.Control
            type="file"
            required
            onChange={(event) =>
              setData({ ...data, file: event.target.files[0] })
            }
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default ResourcesForm;
