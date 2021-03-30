import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <HeaderLogo>
        <img
          src={
            "https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"
          }
        />
      </HeaderLogo>
      <HeaderOptionAddress>
        <OptionLineOne>Hello</OptionLineOne>
        <OptionLineTwo>Select your address</OptionLineTwo>
      </HeaderOptionAddress>
    </Container>
  );
}

const Container = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
`;

const HeaderLogo = styled.div`
  img {
    width: 100px;
  }
`;

const HeaderOptionAddress = styled.div``;

const OptionLineOne = styled.div``;

const OptionLineTwo = styled.div``;

export default Header;
