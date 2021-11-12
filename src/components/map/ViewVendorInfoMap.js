import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../common/BasicDiv";
import { BasicItem } from "../common/BasicItem";
import Responsive from "../common/Responsive";
import SlickCarousel from "../common/SlickCarousel";
import VendorMenuBar from "../menubar/VendorMenuBar";
import VendorMainMap from "./VendorMainMap";

const ViewVendorInfoMapBlock = styled(BasicDiv)`
  position: relative;
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ViewVendorInfoMapItem = styled(BasicItem)``;

const ViewVendorInfoMap = ({ vendor, match }) => {
  return (
    <ViewVendorInfoMapBlock>
      <ViewVendorInfoMapItem className="title">
        {vendor && vendor.vendorName}
      </ViewVendorInfoMapItem>
      <ViewVendorInfoMapItem className="image">
        {vendor && <SlickCarousel type="vendor" images={vendor.pictures} />}
      </ViewVendorInfoMapItem>
      <ViewVendorInfoMapItem className="desc">
        {vendor && vendor.vendorInfo}
      </ViewVendorInfoMapItem>

      <ViewVendorInfoMapItem className="menu">
        <VendorMenuBar match={match} />
      </ViewVendorInfoMapItem>
    </ViewVendorInfoMapBlock>
  );
};

export default ViewVendorInfoMap;
