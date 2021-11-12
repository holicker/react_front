import React, { useState } from "react";
import OpenColor from "open-color";
import styled from "styled-components";
import AskRemoveModal from "../map/qna/AskRemoveModal";

const TransactionActionButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
`;

const ActionButton = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: ${OpenColor.gray[6]};
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    background: ${OpenColor.gray[1]};
    color: ${OpenColor.cyan[7]};
  }
  & + & {
    margin-left: 0.25rem;
  }
`;

const TransactionActionButton = ({ askTransAction }) => {
  return (
    <TransactionActionButtonBlock>
      <ActionButton onClick={askTransAction}>거래 요청</ActionButton>
    </TransactionActionButtonBlock>
  );
};

export default TransactionActionButton;
