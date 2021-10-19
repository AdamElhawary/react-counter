import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Container,
} from "reactstrap";
const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    let id = match.params.id;
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((json) => setProduct(json));
    }
  }, []);
  return (
    <Container>
      <Row className="justify-content-center">
        {product && (
          <Card className={"col-8 m-3 "}>
            <CardImg
              left
              width="300px"
              height="400px"
              src={product.image}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">
                {" "}
                <b>Title: </b> {product.title}
              </CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                <b>Category: </b>
                {product.category}
              </CardSubtitle>
              <CardText>
                <b>Description: </b>
                <br />
                {product.description}...
              </CardText>
              <CardText>
                <b>Price: </b>
                <code style={{ fontSize: "1.5rem" }}>{product.price}</code>
              </CardText>
            </CardBody>
          </Card>
        )}
      </Row>
    </Container>
  );
};

export default ProductDetails;
