import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../../common/BasicDiv";
import { BasicItem } from "../../common/BasicItem";
import Editor from "../../common/Editor";

const MakeQnaBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const MakeQnaItem = styled(BasicItem)`
  flex: 1;

  &.writeTitle {
    flex: 0 0 3rem;
    width: 80%;
    align-self: center;
  }
  &.writeInfo {
    flex: 0 0 1rem;
  }
  &.writeContent {
    align-self: center;
    flex: 1;
    width: 80%;
    background-color: ${OpenColor.white};
  }
  &.writeButton {
    flex: 0 0 2rem;
  }
  input {
    width: 100%;
  }
`;

const MakeQna = ({ title, body, onChangeField }) => {
  const onChangeTitle = (e) => {
    onChangeField({ key: "title", value: e.target.value });
  };

  return (
    <MakeQnaBlock>
      <MakeQnaItem className="writeTitle">
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={onChangeTitle}
        />
      </MakeQnaItem>
      <MakeQnaItem className="writeInfo">인포랑 비밀글 여부</MakeQnaItem>
      <MakeQnaItem className="writeContent">
        <Editor body={body} onChangeField={onChangeField} />
      </MakeQnaItem>
    </MakeQnaBlock>
  );
};

export default MakeQna;
