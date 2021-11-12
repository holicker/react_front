import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../../common/BasicDiv";
import { BasicItem } from "../../common/BasicItem";
import { LinkButton } from "../../common/LinkButton";

const ListMerchandiseMapBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ListMerchandiseMapItem = styled.div`
  margin: 1rem 1rem;
  height: 9rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

const ListMerchandiseComponent = styled(BasicItem)`
  &.photo {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 7;
  }
  &.merchandiseName {
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

const MerchandiseItem = ({ merchandise, onClickLink }) => {
  const {
    id,
    merchandiseName,
    merchandiseDescription,
    merchandisePrice,
    registeredDate,
  } = merchandise;
  return (// 이렇게 매개변수가 있는 놈은 새롭게 함수를 지정해줘야 하는 듯.    
    <ListMerchandiseMapItem onClick={() => onClickLink(id)}>    
      <ListMerchandiseComponent className="photo">
        사진{registeredDate}
      </ListMerchandiseComponent>
      <ListMerchandiseComponent className="merchandiseName">
        {merchandiseName}
      </ListMerchandiseComponent>
      <ListMerchandiseComponent className="info">
        {merchandisePrice}
      </ListMerchandiseComponent>
      <ListMerchandiseComponent className="desc">
        {merchandiseDescription}
      </ListMerchandiseComponent>
    </ListMerchandiseMapItem>
  );
};

const ListMerchandiseMap = ({
  merchandiselist,
  loading,
  error,
  onClickLink,
}) => {
  if (error) {
    return (
      <ListMerchandiseMapBlock>에러가 발생했습니다.</ListMerchandiseMapBlock>
    );
  }
  return (
    <ListMerchandiseMapBlock>
      {!loading && merchandiselist && (
        <div>
          {merchandiselist&&(merchandiselist.map((merchandise) => (
            <MerchandiseItem
              merchandise={merchandise}
              key={merchandise.id}
              onClickLink={onClickLink}
            />
          )))}
        </div>
      )}
    </ListMerchandiseMapBlock>
  );
};

export default ListMerchandiseMap;
