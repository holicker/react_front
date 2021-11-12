import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Chat from "../lib/chat/Chat";
import { initializeChat } from "../modules/chat";
import user from "../modules/user";

const ChatPageBlock = styled.div`
  display: flex;
  height: 500px;
  background-color: white;
  justify-content: center;
`;

const ChatPage = ({ match }) => {
  const { nickname } = useSelector(({ user }) => ({
    nickname: user.nickname,
  }));
  const { roomid } = match.params;
  const dispatch = useDispatch();

  return (
    <ChatPageBlock>
      <Chat nickname={nickname} roomid={roomid} />
    </ChatPageBlock>
  );
};

export default ChatPage;
