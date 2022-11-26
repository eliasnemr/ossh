import styled from "@emotion/styled";
import React from "react";
interface IProps {
  children: React.ReactNode;
}

const ChatField = styled("input")`
  position: absolute;
  bottom: 0;
  height: 68px;
`;

const ChatInput = ({ children }: IProps) => {
  return <ChatField />;
};

export default ChatInput;
