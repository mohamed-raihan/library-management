import React, { useEffect, useState } from 'react';
import './styles.css'; 
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteBookApi, getBooksApi } from '../services/allApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Card() {
  const [deleteB,setDeleteB] = useState(false)
  const [data,setData] = useState([])
  const handleReadMore = () => {
    setShowModal(true);
  };

  const getBooks = async()=>{
    const result = await getBooksApi()
    const {data} = result
    setData(data);
  }
  console.log(data);

  const deleteBook = async(id)=>{
    console.log(id)
    const response = await deleteBookApi(id)
    setDeleteB(true)
    console.log(response);
  }

  useEffect(()=>{
    getBooks()
    setDeleteB(false)
  },[deleteB])


  
  return (
    <>
      {data?.length>0?data?.map((item)=>(
      <article className="card__article">
        <img src={item.imageUrl} alt="image" className="card__img" />
        <div className="card__data">
          <span className="card__description">{item.price}</span>
          <h2 className="card__title">{item.title}</h2>
          <div className='d-flex align-items-center justify-content-between'>
            <Button className="card__button" onClick={handleReadMore}>
              Read More
            </Button>
            <Button onClick={()=>deleteBook(item.id)}><FontAwesomeIcon icon={faTrash} /></Button>
          </div>
        </div>
      </article>))
      :
      <p>the library is empty</p>}
    </>
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
