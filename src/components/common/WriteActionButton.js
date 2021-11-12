import React from "react";
import styled from "styled-components";
import BasicButton from "./BasicButton";

const WriteActionButtonBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled(BasicButton)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteActionButton = ({ onPublish, onCancel, isEdit }) => {
  return (
    <WriteActionButtonBlock>
      <StyledButton onClick={onPublish}>
        질문 {isEdit ? "수정" : "등록"}
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </WriteActionButtonBlock>
  );
};

export default WriteActionButton;
