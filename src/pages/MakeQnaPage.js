import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import BasicButton from "../components/common/BasicButton";
import { BasicDiv } from "../components/common/BasicDiv";
import { BasicItem } from "../components/common/BasicItem";
import MakeQnaActionButtonContainer from "../containers/map/qna/MakeQnaActionButtonContainer";
import MakeQnaMapContainer from "../containers/map/qna/MakeQnaMapContainer";
const MakeQnaPageBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const MakeQnaPageItem = styled(BasicItem)`
  flex: 1;

  &.writeContent {
    align-self: center;
    flex: 1;
    width: 80%;
    background-color: ${OpenColor.white};
  }
  &.writeButton {
    flex: 0 0 2rem;
  }
`;

const MakeQnaPage = () => {
  return (
    <MakeQnaPageBlock>
      <MakeQnaPageItem className="writeContent">
        <MakeQnaMapContainer />
      </MakeQnaPageItem>
      <MakeQnaPageItem className="writeButton">
        <MakeQnaActionButtonContainer />
      </MakeQnaPageItem>
    </MakeQnaPageBlock>
  );
};

export default MakeQnaPage;
