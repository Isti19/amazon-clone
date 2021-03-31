import React from 'react';
import styled from 'styled-components';

function CartItem({ id, item }) {
  return (
    <Container>
      <ImageContainer>
        {/* <img
          src={
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13touch-space-select-202005?wid=1808&hei=1680&fmt=jpeg&qlt=80&.v=1587460552755'
          }
          alt="Product"
        /> */}
        <img src={item.image} />
      </ImageContainer>

      <CartItemInfo>
        <CartItemInfoTop>
          <h2>
            {/* Apple MacBook Pro (13-inch, 16GB RAM, 512GB SSD Storage, Magic
            Keyboard) - Space Grey (Latest Model) */}
            {item.name}
          </h2>
        </CartItemInfoTop>
        <CartItemInfoBottom>
          <CartItemQuantityContainer>{item.quantity}</CartItemQuantityContainer>
          <CartItemDeleteContainer>Delete</CartItemDeleteContainer>
        </CartItemInfoBottom>
      </CartItemInfo>
      <CartItemPrice>£{item.price}</CartItemPrice>
    </Container>
  );
}

const Container = styled.div`
  padding: 12px 0px 12px 0px;
  display: flex;
`;
const ImageContainer = styled.div`
  width: 180px;
  height: 180px;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 16px;

  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;
const CartItemInfo = styled.div``;
const CartItemInfoTop = styled.div`
  color: #007185;
  h2 {
    font-size: 18px;
  }
`;
const CartItemInfoBottom = styled.div`
  display: flex;
  margin-top: 4px;
`;
const CartItemQuantityContainer = styled.div``;
const CartItemDeleteContainer = styled.div`
  color: #007185;
  margin-left: 16px;
  cursor: pointer;
`;
const CartItemPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-left: 16px;
`;

export default CartItem;
