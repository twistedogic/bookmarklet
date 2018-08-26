import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";

const PLACEHOLDER = "___________";

export const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const pickRandomLine = text => {
  const lines = text
    .split("\n")
    .map(line => line.trim().split(" "))
    .filter(line => line.length > 3);
  return lines[getRandomInt(0, lines.length - 1)];
};

export const getQuestion = text => {
  const line = pickRandomLine(text) || [""];
  const idx = getRandomInt(0, line.length - 1);
  const answer = line[idx];
  line[idx] = PLACEHOLDER;
  const question = line.join(" ");
  return {
    question,
    answer
  };
};

const Container = styled("div")({
  margin: "10px"
});

export const Question = ({ question, input, ...props }) => {
  const [start, end] = question.split(PLACEHOLDER);
  return (
    <Container {...props}>
      {start}
      {input}
      {end}
    </Container>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
  input: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
