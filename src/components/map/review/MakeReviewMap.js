import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import BasicButton from "../../common/BasicButton";
import { BasicDiv } from "../../common/BasicDiv";
import { BasicItem } from "../../common/BasicItem";
import Editor from "../../common/Editor";

const MakeReviewMapBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const MakeReviewMapItem = styled(BasicItem)`
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

const MakeReviewMap = ({ title, body, onChangeField }) => {
  const onChangeTitle = (e) => {
    onChangeField({ key: "title", value: e.target.value });
  };

  const onChangeBody = (e) => {
    onChangeField({ key: "body", value: e.target.value });
  };

  return (
    <MakeReviewMapBlock>
      <MakeReviewMapItem className="writeTitle">
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={onChangeTitle}
        />
      </MakeReviewMapItem>
      <MakeReviewMapItem className="writeInfo">
        인포랑 사진 업로드, 별점
      </MakeReviewMapItem>
      <MakeReviewMapItem className="writeContent">
        <textarea
          placeholder="내용"
          row="5"
          column="30"
          value={body}
          onChange={onChangeBody}
        />
      </MakeReviewMapItem>
    </MakeReviewMapBlock>
  );
};

export default MakeReviewMap;
