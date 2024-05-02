import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUser, faClipboardList } from '@fortawesome/free-solid-svg-icons';

function DashBoardManagment() {
  return (
    <Container>
      <h2 className="text-center">Library Management Dashboard</h2>
      <Row>
      <Col md={2}></Col>
        <Col md={3} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faBook} className="me-2" />
                Books
              </Card.Title>
              <Card.Text>
                Manage your librarys book collection, add new books, edit existing ones, and view detailed information.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faUser} className="me-2" />
                Members
              </Card.Title>
              <Card.Text>
                Manage library members, add new members, view membership details, and keep track of membership status.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faClipboardList} className="me-2" />
                Transactions
              </Card.Title>
              <Card.Text>
                View and manage library transactions, including borrowing and returning books, and keep track of transaction history.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={1}></Col>
      </Row>
    </Container>
  );
}

export default DashBoardManagment;
