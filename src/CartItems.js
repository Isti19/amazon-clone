import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

function CartItems({ cartItems }) {
  return (
    <Container>
      <Title>Shopping Cart</Title>
      <hr />
      <ItemsContainer>
        {cartItems.map((item) => (
          <CartItem id={item.id} item={item.product} />
        ))}
      </ItemsContainer>
    </Container>
  );
}

const Container = styled.div`
  flex: 0.8;
  padding: 20px;
  background-color: white;
  margin-right: 18px;
`;

const Title = styled.h1`
  margin-bottom: 8px;
`;

const ItemsContainer = styled.div``;

export default CartItems;
