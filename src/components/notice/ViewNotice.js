import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import BasicButton from "../common/BasicButton";
import { BasicDiv } from "../common/BasicDiv";
import { BasicItem } from "../common/BasicItem";

const ViewNoticeBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  justify-content: center;
  width: 80%;
  flex-direction: column;
`;

const ViewNoticeItem = styled(BasicItem)`
  flex: 1;

  &.noticeTitle {
    flex: 0 0 3rem;
  }
  &.noticeInfo {
    flex: 0 0 1rem;
  }
  &.noticeContent {
    flex: 1;
  }
  &.noticeButton {
    flex: 0 0 2rem;
  }
`;

const ViewNotice = ({ notice, error, loading, actionButtons }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <ViewNoticeBlock>존재하지 않는 포스트입니다.</ViewNoticeBlock>;
    }
    return <ViewNoticeBlock>오류 발생!</ViewNoticeBlock>;
  }

  if (loading || !notice) {
    return null;
  }

  const { title, body, writer, registeredDate } = notice;
  return (
    <ViewNoticeBlock>
      <ViewNoticeItem className="noticeTitle">{title}</ViewNoticeItem>
      <ViewNoticeItem className="noticeInfo">
        {writer} / {registeredDate}
      </ViewNoticeItem>
      <ViewNoticeItem className="noticeContent">{body}</ViewNoticeItem>
      <ViewNoticeItem className="noticeButton">
        <BasicButton to="/notice">뒤로 가기</BasicButton>

        <BasicButton to="/notice">수정</BasicButton>

        <BasicButton to="/notice">삭제</BasicButton>

        <BasicButton to="/notice">비활성화/활성화 토글</BasicButton>
      </ViewNoticeItem>
    </ViewNoticeBlock>
  );
};

export default ViewNotice;
