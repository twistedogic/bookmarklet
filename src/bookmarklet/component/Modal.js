import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import { NODE_NAME } from "../index";

const Container = styled("div")({
  position: "fixed",
  paddingTop: "100px",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  overflow: "auto",
  backgroundColor: `rgb(0,0,0,0.4)`,
  fontFamily: `"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif`,
  fontWeight: 300,
  zIndex: -1,
  position: "relative"
});

const Content = styled("section")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fefefe",
  padding: "20px",
  width: "80%",
  margin: "auto"
});

const Button = styled("button")({
  width: 100,
  textAlign: "center"
});

class Modal extends Component {
  componentWillUnmount() {
    this.remove();
  }
  remove = () => document.getElementsByTagName(NODE_NAME)[0].remove();
  handleClick = event => {
    event.preventDefault();
    this.remove();
  };
  render() {
    const { handleClick } = this;
    const { children } = this.props;
    return (
      <Container>
        <Content>
          {children}
          <Button onClick={handleClick}>Cancel</Button>
        </Content>
      </Container>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Modal;
