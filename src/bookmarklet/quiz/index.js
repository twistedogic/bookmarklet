import React, { Component } from "react";
import { css, cx } from "react-emotion";
import RenderDOM from "../index";
import Modal from "../component/Modal";
import { getQuestion, Question } from "./util";

const inputClass = css({
  ":focus": {
    outline: "none"
  },
  border: "none",
  borderBottom: "1px solid red"
});
const correctClass = css({ borderBottom: "1px solid green" });
const defaultText = "Hope is not a strategy";

class Quiz extends Component {
  state = { question: "", answer: "", value: "" };
  componentDidMount() {
    const siteText = document.body.innerText;
    const text = siteText.length === 0 ? defaultText : siteText;
    const qna = getQuestion(text);
    this.setState(qna);
  }
  handleChange = event => {
    event.preventDefault();
    const { value } = event.target;
    this.setState({ value });
  };
  render() {
    const { handleChange } = this;
    const { question, answer, value } = this.state;
    const correct = answer === value;
    const fontSize = 16;
    const inputWidth = css({
      width: `${(answer.length + 1) * fontSize}px`
    });
    const questionClass = css({
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize
    });
    const style = cx(inputClass, inputWidth, { [correctClass]: correct });
    const input = (
      <input className={style} onChange={handleChange} value={value} />
    );
    return (
      <Modal>
        <Question input={input} question={question} className={questionClass} />
      </Modal>
    );
  }
}

RenderDOM(<Quiz />);
