import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../common/BasicDiv";
import { BasicItem } from "../common/BasicItem";

const ListMerchandiseBlock = styled(BasicDiv)`
  background-color: ${OpenColor.gray[2]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  max-height: 100vh;
  width: 100%;
`;

let displayNone = true;

const ListMerchandiseItem = styled(BasicItem)`
  border: 1px solid ${OpenColor.black};

  &.left {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    overflow: auto;
  }

  &.right {
    display: flex;
    flex-direction: column;
    flex: 2;
  }
`;
const MerchandiseBlock = styled(BasicItem)`
  padding: 1rem;
  flex: 0 0 14rem;
  height: 10rem;
  flex-direction: column;
`;
const Merchandise = styled(BasicItem)``;

const MerchandiseItem = ({ merchandise, onClickLink }) => {
  const {
    id,
    merchandiseName,
    merchandiseDecription,
    currentDate,
    merchandisePrice,
  } = merchandise;
  return (
    <MerchandiseBlock onClick={() => onClickLink(id)}>
      <Merchandise className="photo">사진</Merchandise>
      <Merchandise className="title">{merchandiseName}</Merchandise>
      <Merchandise className="info">
        {merchandisePrice} 및 {currentDate}
      </Merchandise>
      <Merchandise className="desc">{merchandiseDecription}</Merchandise>
    </MerchandiseBlock>
  );
};

const ListMerchandise = ({ list, loading, error, onClickLink }) => {
  if (error) {
    return <ListMerchandiseBlock>에러가 발생했습니다.</ListMerchandiseBlock>;
  }
  return (
    <ListMerchandiseBlock>
      {!loading &&
        list &&
        list.map((merchandise) => (
          <MerchandiseItem
            key={merchandise.id}
            merchandise={merchandise}
            onClickLink={onClickLink}
          />
        ))}
    </ListMerchandiseBlock>
  );
};

export default ListMerchandise;
