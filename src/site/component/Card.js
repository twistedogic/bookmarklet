import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";

const StyledContent = styled("div")({
  a: {
    color: "inherit",
    textDecoration: "none",
    backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 0.2em",
    backgroundPosition: "0 88%",
    transition: "background-size 0.25s ease-in",
    "&:hover": {
      backgroundSize: "100% 88%"
    }
  },
  margin: "5px"
});

const Card = ({ name, href }) => (
  <StyledContent>
    <a href={href}>{name.toUpperCase()}</a>
  </StyledContent>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default Card;
