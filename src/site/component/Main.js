import React from "react";
import PropTypes from "prop-types";
import { MainContainer } from "./Layout";
import Card from "./Card";
import styled from "react-emotion";

const FlexBox = styled("div")({
  display: "flex"
});

const Main = ({ bookmarklets }) => {
  const cards = bookmarklets.map(({ name, href }) => (
    <Card key={name} name={name} href={href} />
  ));
  return (
    <MainContainer>
      <FlexBox>{cards}</FlexBox>
    </MainContainer>
  );
};

Main.propTypes = {
  bookmarklets: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default Main;
