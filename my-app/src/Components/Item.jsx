import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Items from './Items.json';

export default function Item() {

  // Function to handle adding an item to cart
  const addToCart = (product) => {
    // Get existing cart from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the new product
    storedCart.push(product);

    // Save back to localStorage
    localStorage.setItem("cart", JSON.stringify(storedCart));

    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="main1">
      <div className="d-flex flex-wrap gap-4 justify-content-center pt-5">
        {Items.map((eachcard, index) => (
          <Card
            key={index}
            style={{
              width: '300px',
              height: '500px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <Card.Img
                variant="top"
                src={eachcard.image}
                alt={eachcard.name}
                style={{ height: '100%', objectFit: 'cover' }}
              />
            </div>
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title>{eachcard.name}</Card.Title>
                <Card.Text style={{ fontSize: '14px' }}>
                  Brand: {eachcard.brand} <br />
                  Material: {eachcard.material} <br />
                  Dimensions: {eachcard.dimensions} <br />
                  <s>₹{eachcard.price}</s><br />
                  <span style={{ color: 'green', fontWeight: 'bold' }}>
                    ₹{eachcard.price - (eachcard.price * eachcard.discount) / 100}
                  </span>{" "}
                  (Save {eachcard.discount}%)
                </Card.Text>
              </div>
              <Button
                variant="primary"
                onClick={() => addToCart(eachcard)}
              >
                Add To Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
