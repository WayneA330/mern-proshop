import React from "react";
import { Card } from "react-bootstrap";

const Products = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Title as="h3">${product.price}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Products;
