import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../components/common/BasicDiv";
import { BasicItem } from "../components/common/BasicItem";
import MakeReviewActionButtonContainer from "../containers/map/review/MakeReviewActionButtonContainer";
import MakeReviewMapContainer from "../containers/map/review/MakeReviewMapContainer";
const MakeReviewPageBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const MakeReviewPageItem = styled(BasicItem)`
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

const MakeReviewPage = () => {
  return (
    <MakeReviewPageBlock>
      <MakeReviewPageItem className="writeContent">
        <MakeReviewMapContainer />
      </MakeReviewPageItem>
      <MakeReviewPageItem className="writeButton">
        <MakeReviewActionButtonContainer />
      </MakeReviewPageItem>
    </MakeReviewPageBlock>
  );
};

export default MakeReviewPage;
