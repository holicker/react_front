import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import BasicButton from "./BasicButton";
import { BasicDiv } from "./BasicDiv";
import { BasicItem } from "./BasicItem";

const Fullscreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MerchandiseModalBlock = styled.div`
  width: 320px;
  background: white;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 3rem;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;

const DetailMerchandiseMapBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;

const DetailMerchandiseMapItem = styled(BasicItem)`
  flex: 1;

  &.photo {
    flex: 0 0 20rem;
  }
  &.title {
    flex: 0 0 3rem;
  }
  &.info {
    flex: 0 0 2rem;
  }
  &.desc {
    flex: 1 0 3rem;
  }
  &.button {
    flex: 0 0 2rem;
  }
`;

const StyledButton = styled(BasicButton)`
  height: 2rem;
  & + & {
    margin-left: 0.75rem;
  }
`;

const MerchandiseModal = ({ visible, merchandise, onClickClose }) => {
  const {
    merchandiseName: title,
    merchandiseDecription: body,
    merchandisePrice: price,
    currentDate: registeredDate,
  } = merchandise;

  if (!visible) return null;

  return (
    <Fullscreen>
      <MerchandiseModalBlock>
        <DetailMerchandiseMapItem className="photo">
          사진
        </DetailMerchandiseMapItem>
        <DetailMerchandiseMapItem className="title">
          {title}
        </DetailMerchandiseMapItem>
        <DetailMerchandiseMapItem className="info">
          {price} / {registeredDate}
        </DetailMerchandiseMapItem>
        <DetailMerchandiseMapItem className="desc">
          {body}
        </DetailMerchandiseMapItem>
        <DetailMerchandiseMapItem className="button">
          <StyledButton onClick={onClickClose}>닫기</StyledButton>
        </DetailMerchandiseMapItem>
      </MerchandiseModalBlock>
    </Fullscreen>
  );
};

export default MerchandiseModal;
