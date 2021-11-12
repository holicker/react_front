import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import BasicButton from "../common/BasicButton";
import { BasicDiv } from "../common/BasicDiv";
import { BasicItem } from "../common/BasicItem";
import { LinkButton } from "../common/LinkButton";

const ListNoticeBlock = styled(BasicDiv)`
  margin: 0px 5px;
  background-color: ${OpenColor.blue[1]};
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ListNoticeItem = styled(BasicItem)`
  &.addbutton {
    justify-content: right;
  }

  a {
    font-size: 1rem;
  }

  p {
    font-size: 1rem;
  }
`;

const NoticeItem = ({ notice }) => {
  const { id, title, body, registeredDate } = notice;
  return (
    <ListNoticeItem>
      <LinkButton to={`/notice/view/${id}`}>{title}</LinkButton>
      <p>{body}</p>
      <p>{registeredDate}</p>
    </ListNoticeItem>
  );
};

const ListNotice = ({ noticelist, loading, error }) => {
  if (error) {
    return <ListNoticeBlock>에러가 발생했습니다.</ListNoticeBlock>;
  }
  return (
    <ListNoticeBlock>
      <ListNoticeItem className="addbutton">
        <BasicButton to="/notice/write">공지 등록</BasicButton>
      </ListNoticeItem>
      {!loading && noticelist && (
        <div>
          {noticelist.content.map((notice) => (
            <NoticeItem notice={notice} key={notice.id} />
          ))}
        </div>
      )}
    </ListNoticeBlock>
  );
};

export default ListNotice;
