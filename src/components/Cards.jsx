import React, { useState } from 'react';
import './styles.css'; 
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Card({ imgSrc, description, title, showModal, setShowModal }) {
  const handleReadMore = () => {
    setShowModal(true);
  };

  return (
    <article className="card__article">
      <img src={imgSrc} alt="image" className="card__img" />
      <div className="card__data">
        <span className="card__description">{description}</span>
        <h2 className="card__title">{title}</h2>
        <Button className="card__button" onClick={handleReadMore}>
          Read More
        </Button>
      </div>
    </article>
  );
}

function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="home">
      <div className="container">
        <h2>Popular</h2>
        <div className="card__container">
          <Card
            imgSrc="https://www.bookswagon.com/productimages/images200/831/9781847941831.jpg"
            description="Small changes, big results."
            title="Atomic Habits"
            showModal={showModal}
            setShowModal={setShowModal}
          />
          <Card
            imgSrc="https://www.bookswagon.com/productimages/images200/368/9781501110368.jpg"
            description="Love, resilience, breaking cycles."
            title="It Ends with Us"
            showModal={showModal}
            setShowModal={setShowModal}
          />
          <Card
            imgSrc="https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/167/9780143464167.jpg"
            description="Gritty tales, urban survival."
            title="Crime, Grime and Gumption"
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Read More</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This is the modal content.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default Home;
