import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import { HeaderContainer } from "./Layout";

const Heading = styled("h1")({
  display: "inline-block",
  borderStyle: "solid",
  borderWidth: "0 0 0 5px",
  borderColor: "black",
  paddingLeft: "10px"
});

const Header = ({ heading }) => (
  <HeaderContainer>
    <Heading>{heading}</Heading>
  </HeaderContainer>
);

Header.propTypes = {
  heading: PropTypes.string.isRequired
};

export default Header;
