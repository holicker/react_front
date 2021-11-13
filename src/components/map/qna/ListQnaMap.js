import OpenColor from "open-color";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import styled from "styled-components";
import { qnaList } from "../../../modules/qnalist";
import MakeQnaPage from "../../../pages/MakeQnaPage";
import BasicButton from "../../common/BasicButton";
import { BasicDiv } from "../../common/BasicDiv";
import { BasicItem } from "../../common/BasicItem";

const ListQnaMapBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ListQnaMapItem = styled.div`
  margin: 1rem 1rem;
  height: 9rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

const ListQnaComponent = styled(BasicItem)`
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

const QnaItem = ({ qna }) => {
  const { title, body, writer, registeredDate } = qna;
  return (
    <ListQnaMapItem>
      <ListQnaComponent className="title">{title}</ListQnaComponent>
      <ListQnaComponent className="info">{registeredDate}</ListQnaComponent>
      <ListQnaComponent className="desc">{body}</ListQnaComponent>
    </ListQnaMapItem>
  );
};

const ListQnaMap = ({ qnalist, page, vendorid, vendor, location }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    vendorid && dispatch(qnaList({ vendorid, page }));
  }, [dispatch, vendorid, page, location]);

  return (
    <ListQnaMapBlock>
      <BasicButton>질문 작성</BasicButton>
      <MakeQnaPage vendorid={vendorid} vendor={vendor} />
      {qnalist && (
        <div>
          {qnalist.content.map((qna) => (
            <QnaItem qna={qna} key={qna.id} />
          ))}
        </div>
      )}
    </ListQnaMapBlock>
  );
};

export default withRouter(ListQnaMap);
