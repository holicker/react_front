import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../common/BasicDiv";
import { BasicItem } from "../common/BasicItem";

const ListTransactionBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  justify-content: center;
  height: 100%;
  max-height: 90vh;
`;

const ListTransactionItem = styled(BasicItem)`
  width: 100%;
  border: 1px solid ${OpenColor.black};
  flex: 1;

  &.left {
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  &.center {
    display: flex;
    flex-direction: column;
  }

  &.right {
    display: flex;
    flex-direction: column;
  }
  &.title {
    flex: 0 0 2rem;
  }
  &.button {
    flex: 0 0 2rem;
  }

  &.list {
    justify-content: flex-start;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }
`;

const TransactionBlock = styled(BasicItem)`
  padding: 1rem;
  flex: 0 0 5rem;
  height: 10rem;
  flex-direction: column;
`;
const Transaction = styled(BasicItem)``;

const TransactionItem = ({ chat, type, enterChatting }) => {
  return (
    <TransactionBlock onClick={() => enterChatting(chat.roomId)}>
      <Transaction className="title">{chat.roomName}</Transaction>
      <Transaction className="partner">
        {type === "buyer" ? chat.sellerNickname : chat.buyerNickname}
      </Transaction>
      <Transaction className="desc">{chat.roomId}</Transaction>
    </TransactionBlock>
  );
};

const ListTransaction = ({ sellerlist, buyerlist, enterChatting }) => {
  return (
    <ListTransactionBlock>
      <ListTransactionItem className="left">
        <ListTransactionItem className="info"></ListTransactionItem>

        <ListTransactionItem className="button">
          과거 거래 목록 / 현재 거래 목록
        </ListTransactionItem>
        <ListTransactionItem className="notify"></ListTransactionItem>
      </ListTransactionItem>

      <ListTransactionItem className="center">
        <ListTransactionItem className="title">구매 관련</ListTransactionItem>

        <ListTransactionItem className="list">
          {buyerlist &&
            buyerlist.map((chat) => (
              <TransactionItem
                key={chat.roomId}
                chat={chat}
                type="buyer"
                enterChatting={enterChatting}
              />
            ))}
        </ListTransactionItem>
      </ListTransactionItem>
      <ListTransactionItem className="right">
        <ListTransactionItem className="title">판매 관련</ListTransactionItem>
        <ListTransactionItem className="list">
          {sellerlist &&
            sellerlist.map((chat) => (
              <TransactionItem
                key={chat.roomId}
                chat={chat}
                type="seller"
                enterChatting={enterChatting}
              />
            ))}
        </ListTransactionItem>
      </ListTransactionItem>
    </ListTransactionBlock>
  );
};

export default ListTransaction;
