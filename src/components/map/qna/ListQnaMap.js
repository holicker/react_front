import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../../common/BasicDiv";
const ListQnaMapBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// const ListQnaMapItem = styled.div`
//   margin: 1rem 1rem;
//   flex-direction: column;
//   display: flex;
// `;

const QnaTable = styled.table``;
const QnaTh = styled.th``;
const QnaTr = styled.tr``;
const QnaTd = styled.td``;

const QnaHead = () => {
  return (
    <thead>
      <QnaTr>
        <QnaTh className="no">번호</QnaTh>
        <QnaTh className="title">질문 제목</QnaTh>
        <QnaTh className="info">날짜</QnaTh>
        <QnaTh className="desc">조회수</QnaTh>
        <QnaTh className="desc">답변 여부</QnaTh>
      </QnaTr>
    </thead>
  );
};
const QnaItem = ({ qna, onClickLink }) => {
  const { id, title, body, writer, registerdDate } = qna;

  return (
    <QnaTr onClick={() => onClickLink(id)}>
      <QnaTd className="no">번호</QnaTd>
      <QnaTd className="title">{title}</QnaTd>
      <QnaTd className="info">
        {registerdDate} / {writer}
      </QnaTd>
      <QnaTd className="desc">{body}</QnaTd>
    </QnaTr>
  );
};

const ListQnaMap = ({ qnalist, loading, error, onClickLink }) => {
  console.log(onClickLink);
  if (error) {
    return <ListQnaMapBlock>에러가 발생했습니다.</ListQnaMapBlock>;
  }
  return (
    <ListQnaMapBlock>
      {!loading && qnalist && (
        <QnaTable>
          <QnaHead />
          <tbody>
            {qnalist.content.map((qna) => (
              <QnaItem qna={qna} key={qna.id} onClickLink={onClickLink} />
            ))}
          </tbody>
        </QnaTable>
      )}
    </ListQnaMapBlock>
  );
};

export default ListQnaMap;
