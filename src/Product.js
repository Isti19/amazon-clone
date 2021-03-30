import React from "react";
import styled from "styled-components";

function Product() {
  return (
    <Container>
      <Title>Macbook Pro 13"</Title>
      <Price>$1499</Price>
      <Rating>⭐⭐⭐⭐⭐</Rating>
      <Image />
      <AddToCartButton>Add to Cart</AddToCartButton>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  z-index: 100;
  flex: 1;
  padding: 20px;
  margin: 10px;
  max-height: 400px;
`;

const Title = styled.span``;
const Price = styled.span`
  font-weight: 500;
`;
const Rating = styled.div``;
const Image = styled.img``;
const AddToCartButton = styled.button``;

export default Product;
