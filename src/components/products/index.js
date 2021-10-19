import React, { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <Container>
      <Row className="p-3 justify-content-center">
        {products.map((product, index) => {
          return (
            <div key={product.id} className={"col-3 p-1 m-1"}>
              <Link to={`/product/details/${product.id}`}>
                <Card style={{ maxHeight: "30rem", height: "100%" }}>
                  <CardImg
                    top
                    width="30%"
                    height="50%"
                    src={product.image}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">{product.title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      {product.category}
                    </CardSubtitle>
                    <CardText>
                      {product.description.substring(0, 100)}...
                    </CardText>
                    <CardText>{product.price}</CardText>
                  </CardBody>
                </Card>
              </Link>

              <Button>Add to Cart</Button>
            </div>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products;
