import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../components/common/BasicDiv";
import { BasicItem } from "../components/common/BasicItem";
import NaverMapAPIContainer from "../containers/map/NaverMapAPIContainer";
import MakeVendorFormContainer from "../containers/vendor/MakeVendorFormContainer";
const MakeVendorPageBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const MakeVendorPageItem = styled(BasicItem)`
  flex: 1;

  &.right {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  &.left {
    flex: 1.5;
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
`;

const MakeVendorPage = () => {
  return (
    <MakeVendorPageBlock>
      <MakeVendorPageItem className="right">
        <NaverMapAPIContainer />
      </MakeVendorPageItem>
      <MakeVendorPageItem className="right">
        <MakeVendorPageItem className="writeContent">
          <MakeVendorFormContainer />
        </MakeVendorPageItem>
      </MakeVendorPageItem>
    </MakeVendorPageBlock>
  );
};

export default MakeVendorPage;
