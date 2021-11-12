import OpenColor from "open-color";
import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";
const isBlank = require("is-blank");

const TalkMessageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.selfPosted ? "flex-end" : "flex-start")};
`;

const TalkBubble = css`
  background: ${OpenColor.gray[0]};
  padding: 6px;
  margin: 6px 10px;
  position: relative;
  border-radius: 4px;
  max-width: 75%;
`;
const TalkBubblePointer = css`
  content: " ";
  position: absolute;
  width: 0;
  height: 0;
  bottom: auto;
  border: 6px solid;
  border-color: ${OpenColor.gray[0]} transparent transparent transparent;
  top: 0px;
  left: ${(props) => (props.selfPosted ? "auto" : "-6px")};
  right: ${(props) => (props.selfPosted ? "-6px" : "auto")};
`;

const TalkMessageWriter = styled.div`
  display: ${(props) => (props.selfPosted ? "none" : "")};
`;

const TalkMessageContentBlock = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.selfPosted ? "row-reverse" : "row")};
`;

const TalkMessageContent = styled.div`
  ${TalkBubble}
  &::after {
    ${TalkBubblePointer}
  }
`;
const TalkMessageTime = styled.div``;

class TalkMessage extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    // author is for name of the author, 2 can be same
    writer: PropTypes.string.isRequired,
    // is the message self posted
    selfPosted: PropTypes.bool.isRequired,
    // timestamp of the message
    chattedTime: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      message: this.props.message,
    };
  }

  onMessageEdit = (msg) => {
    this.setState({ message: msg });
  };

  render() {
    return (
      <TalkMessageBlock selfPosted={this.props.selfPosted}>
        <TalkMessageWriter selfPosted={this.props.selfPosted}>
          {this.props.writer}
        </TalkMessageWriter>
        <TalkMessageContentBlock selfPosted={this.props.selfPosted}>
          <TalkMessageContent selfPosted={this.props.selfPosted}>
            {this.state.message}
          </TalkMessageContent>

          <TalkMessageTime selfPosted={this.props.selfPosted}>
            {this.props.chattedTime}
          </TalkMessageTime>
        </TalkMessageContentBlock>
      </TalkMessageBlock>
    );
  }
}

export default TalkMessage;
