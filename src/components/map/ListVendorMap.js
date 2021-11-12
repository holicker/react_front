import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../common/BasicDiv";
import { BasicItem } from "../common/BasicItem";

const ListVendorMapBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ListVendorMapItem = styled.div`
  margin: 1rem 1rem;
  height: 9rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

const ListVendorComponent = styled(BasicItem)`
  color: ${OpenColor.gray[9]};
  background-color: ${OpenColor.pink[2]};
  &.photo {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 7;
  }
  &.title {
    grid-column-start: 4;
    grid-column-end: 8;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  &.info {
    grid-column-start: 4;
    grid-column-end: 8;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  &.desc {
    grid-column-start: 4;
    grid-column-end: 8;
    grid-row-start: 3;
    grid-row-end: 8;
  }
`;

const VendorItem = ({ vendor }) => {
  return (
    <ListVendorMapItem>
      <ListVendorComponent className="photo">
        벤더 대표 사진
      </ListVendorComponent>
      <ListVendorComponent className="title">
        {vendor.vendorName}
      </ListVendorComponent>
      <ListVendorComponent className="info">
        별점, 리뷰 갯수 거래 횟수 등 정보
      </ListVendorComponent>
      <ListVendorComponent className="desc">
        {vendor.vendorInfo}
      </ListVendorComponent>
    </ListVendorMapItem>
  );
};

const ListVendorMap = ({ loading, error, vendorlist, onClickLink }) => {
  console.log(onClickLink);
  if (error) {
    return <ListVendorMapBlock>에러가 발생했습니다.</ListVendorMapBlock>;
  }
  return (
    <ListVendorMapBlock>
      {!loading &&
        vendorlist &&
        vendorlist.map((vendor) => <VendorItem vendor={vendor} />)}
    </ListVendorMapBlock>
  );
};

export default ListVendorMap;
