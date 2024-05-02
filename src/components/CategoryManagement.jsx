/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

function CategoryManagement() {
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([]);

  // Function to handle modal open
  const handleShow = () => setShow(true);
  
  // Function to handle modal close
  const handleClose = () => setShow(false);

  // Dummy categories data for testing
  const dummyCategories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' }
  ];

  return (
    <>
      <div>
        <Row className='mt-5'>
          <Col lg={2}></Col>
          <Col lg={6}>
            <div className='d-flex  mb-2'>
              <h3><span className='text-dark'>Categories</span></h3>
            </div>
          </Col>
          <Col lg={2}>
            <div className='d-flex justify-content-center align-items-center mb-5'>
              <button className='btn btn-dark w-100 ms-5' onClick={handleShow}>Add New Category</button>
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title><FontAwesomeIcon icon={faPencil} className='me-2 text-warning'/>Add New Category</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form className='border rounded p-3 border-secondary'>
                  <Form.Group className="mb-3">
                    <Form.Label>Category Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Category Name"/>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <button className='btn btn-dark' onClick={handleClose}>
                  Cancel
                </button>
                <button className='btn btn-warning'>
                  Add
                </button>
              </Modal.Footer>
            </Modal>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </div>


      <Row className='mt-5'>
          <Col lg={2}></Col>
          <Col lg={9}>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Category Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyCategories.map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>
                <button className="btn btn-sm btn-dark me-1">Edit</button>
                <button className="btn btn-sm btn-dark">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </Col>
      <Col lg={2}></Col>
      </Row>
    </>
  );
}

export default CategoryManagement;
