import React, { useEffect, useState } from "react";
import { Col, Row, Button, Modal, Form } from "react-bootstrap";
import Cards from "../components/Cards";
import axios from "axios";
import "./styles.css";
import Admin from "../pages/Admin";
import { getBooksApi, uploadBookApi } from "../services/allApi";

function ProductManagement() {
  const [showModal, setShowModal] = useState(false);
  // const [title, setTitle] = useState('');
  // const [author, setAuthor] = useState('');
  // const [price, setPrice] = useState('');
  // const [imageUrl, setImageUrl] = useState('');
  // const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const [data,setData] = useState([])
  const [books, setBooks] = useState({
    title: "",
    author: "",
    price: "",
    imageUrl: "",
  });
  console.log(books);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // Implement functionality to search products
  };

  const handleAddProduct = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleUpload = async () => {
    const { title, author, price, imageUrl } = books;
    console.log(title, author, price, imageUrl);
    if (!title || !author || !price || !imageUrl) {
      alert("please fill the form completely");
    } else {
      const response = await uploadBookApi(books);
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        setBooks({
          title: "",
          author: "",
          price: "",
          imageUrl: "",
        });
        alert("added succesfully")
        handleCloseModal()
      }else{
        alert("something went wrong")
      }
    }
  };
  

  // const getBooks = async()=>{
  //   const result = await getBooksApi()
  //   const {data} = result
  //   setData(data);
  // }
  // console.log(data);

  // useEffect(()=>{
  //   getBooks()
  // },[])

  // const handleUpload = () => {
  //   const newProduct = {
  //     title,
  //     author,
  //     price,
  //     imageUrl
  //   };

  //   axios.post('http://localhost:3001/products', newProduct)
  //     .then(response => {
  //       setProducts([...products, response.data]);
  //       handleCloseModal();
  //     })
  //     .catch(error => {
  //       console.error('Error adding product:', error);
  //     });
  // };
  // console.log(products);

  return (
    <>
      <Row className="mt-5">
        <Col lg={1}>
          <Admin />
        </Col>
        <Col lg={10}>
          <h2 className="text-center">Product Management</h2>
          <div className="pt-4 mb-3 outer-rectangle">
            <section className="d-flex justify-content-center align-items-center">
              <div className="mb-3 d-flex">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Name or Author"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <button className="btn btn-dark ms-1">Search</button>
              </div>
              <div className="mb-3 d-flex ms-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Category"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <Button
                  className="btn btn-dark ms-3"
                  onClick={handleAddProduct}
                  style={{ height: "38px", width: "251px" }}
                >
                  Add Product
                </Button>
              </div>
            </section>
          </div>
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Add Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the Book Title"
                    value={books.title}
                    onChange={(e) =>
                      setBooks({ ...books, title: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="author">
                  <Form.Label>Author</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the Author"
                    value={books.author}
                    onChange={(e) =>
                      setBooks({ ...books, author: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="price">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the Price"
                    value={books.price}
                    onChange={(e) =>
                      setBooks({ ...books, price: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="imageUrl">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the Book Image URL"
                    value={books.imageUrl}
                    onChange={(e) =>
                      setBooks({ ...books, imageUrl: e.target.value })
                    }
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button variant="warning" onClick={handleUpload}>
                Add
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>

      <Cards/>
    </>
  );
}

export default ProductManagement;
